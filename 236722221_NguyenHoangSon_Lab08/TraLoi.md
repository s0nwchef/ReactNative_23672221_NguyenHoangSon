# Trả lời câu hỏi bổ sung — Buổi 8

## 1. Cờ `ready` trong `useAutoPersist`

Nếu bỏ điều kiện `ready`, giỏ hàng đã lưu sẽ bị mất mỗi lần mở lại app. Thứ tự các lần render:

1. **Render đầu:** store khởi tạo với `cart.items = []`. Effect của `useAutoPersist` chạy ngay và ghi `[]` vào AsyncStorage, đè lên giỏ cũ.
2. Cùng lúc đó, hàm đọc `loadJSON(CART_KEY)` trong `usePersistence` là bất đồng bộ nên chưa trả về. Khi nó đọc xong thì dữ liệu cũ đã bị ghi đè (hoặc đang bị ghi đè), nên chỉ đọc được `[]` hoặc `null`.
3. **Các render sau:** dù `hydrateCart` có chạy, giỏ nạp lên đã rỗng.

Có `ready` thì việc ghi bị chặn cho tới khi đọc xong và đã `dispatch(hydrate…)`. Chỉ sau đó `setReady(true)` mới cho phép ghi.

## 2. Token giả

**Hai điểm không an toàn:**
- Mật khẩu nằm sẵn (dạng thô) trong `db.json`, app tải user về rồi tự so sánh ở phía client. Ai mở DevTools/xem response cũng thấy mật khẩu của người khác, và ai sửa code app cũng bỏ qua được bước kiểm tra.
- Token do app tự tạo nên không có chữ ký của server: ai cũng có thể tự làm ra một token "hợp lệ". Token cũng không có thời hạn và không thu hồi được.

**Hệ thống thật:** *server* kiểm tra mật khẩu (so với mật khẩu đã băm bằng bcrypt/argon2, không lưu thô) rồi cấp token có chữ ký và có thời hạn (JWT hoặc session token). App lưu token bằng **SecureStore** (`expo-secure-store`, dùng Keychain trên iOS / Keystore trên Android) thay vì AsyncStorage, vì AsyncStorage lưu chữ thô, không mã hóa.

## 3. Hai effect trong `CartItemRow`

Nếu xóa effect đồng bộ `setQty(item.quantity)`, `qty` chỉ được lấy `item.quantity` **một lần ở lần render đầu**. Số hiển thị sẽ lệch store khi `item.quantity` đổi mà component **không** bị mount lại, ví dụ:

- Giỏ nạp từ AsyncStorage sau khi mở app (hoặc `hydrateCart`) làm `item.quantity` đổi sau khi dòng đã render.
- Bấm "Thêm vào giỏ" ở trang chi tiết cho sách đã có trong giỏ: store tăng lên nhưng ô số lượng vẫn giữ số cũ.
- Store tự chỉnh lại số lượng (ví dụ `clamp` theo tồn kho trong `setQuantity`) khác với số người dùng bấm.

Khi đó nút hiển thị một số, còn tổng tiền theo store lại là số khác.

## 4. Một nguồn state

Nếu mỗi `HeartButton` giữ `useState` riêng thì mỗi nơi có một bản sao độc lập: bấm tim ở lưới Home (đỏ), mở trang chi tiết thì tim ở đó khởi tạo lại là trắng. Bỏ tim ở trang chi tiết, quay lại lưới vẫn đỏ. Màn Yêu thích cũng không biết sách nào đã thả tim.

Với store (Redux), danh sách `ids` chỉ có **một** bản. Mọi `HeartButton` đọc `isFavorite(bookId)` từ cùng nguồn và gọi `toggle` để sửa cùng nguồn đó. Store đổi thì mọi component đang dùng đều re-render với giá trị mới, nên các nơi luôn khớp nhau, và store cũng là thứ duy nhất cần lưu vào AsyncStorage.

## 5. Nút 👁 hiện/ẩn mật khẩu

Trong `src/screens/LoginScreen.tsx`:

```tsx
const [showPassword, setShowPassword] = useState(false);

<View>
  <FormField
    label="Mật khẩu"
    value={password}
    onChangeText={setPassword}
    error={errors.password}
    secureTextEntry={!showPassword}   // showPassword điều khiển việc ẩn/hiện ký tự
    style={{ paddingRight: 44 }}
  />
  <Pressable
    onPress={() => setShowPassword((v) => !v)}
    style={{ position: "absolute", right: 12, top: 31 }}
    accessibilityLabel={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
  >
    <Text style={{ fontSize: 18 }}>{showPassword ? "🙈" : "👁"}</Text>
  </Pressable>
</View>
```

Ảnh chụp màn hình: bạn tự chụp khi chạy app trên máy (đề yêu cầu chụp màn hình kết quả) và chèn vào đây: `![Hiện/ẩn mật khẩu](anh_5.png)`.
