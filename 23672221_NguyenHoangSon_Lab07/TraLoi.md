# Trả lời câu hỏi bổ sung - Buổi 7

**Họ tên:** Nguyễn Hoàng Sơn · **MSSV:** 23672221

## 1. Cấu trúc điều hướng
BookDetail được đăng ký ở Stack vì Stack xếp màn mới *chồng lên* màn Tabs: màn Chi tiết phủ kín cả Tab Bar và tự có nút ← để quay về Home. Nếu đặt BookDetail trong Tab thì nó trở thành một tab ngang hàng với Home, Danh mục, Giỏ hàng, Tài khoản: Tab Bar vẫn hiện (và tự dựng của mình sẽ vẽ thêm một mục), không có nút ← tự động, và người dùng phải tự bấm tab khác để thoát ra. Ngoài ra màn Chi tiết chỉ có ý nghĩa khi có `bookId`, còn tab thì luôn mở được mà không cần tham số.

## 2. Redux
Trong `createSlice`, reducer nhận `state` là một bản nháp (draft) do Immer tạo ra; `state.items.push(...)` chỉ sửa trên bản nháp đó, Immer ghi lại thay đổi rồi tạo ra một state mới bất biến, còn state gốc không bị đụng tới. Nếu bỏ `useMemo` trong `useCart` thì tổng số lượng và tổng tiền hiển thị vẫn đúng như cũ, vì giá trị chỉ phụ thuộc vào `items`. Hậu quả là `reduce` bị chạy lại ở mỗi lần component render (kể cả khi giỏ không đổi), giỏ nhỏ không thấy khác biệt nhưng giỏ lớn sẽ tốn thêm tính toán; `useMemo` chỉ là tối ưu hiệu năng, không quyết định đúng sai.

## 3. Promise.all
Nếu `getCategories()` lỗi còn `getBooks()` thành công, `Promise.all` bị từ chối ngay (reject) nên nhảy vào `catch`: Home hiện `ErrorView` với nút Thử lại và *không* hiện sách nào, dù request sách đã thành công (vì `setBooks` nằm sau dòng `await`). Dùng `Promise.allSettled` thì nhận được kết quả của từng request: sách thành công vẫn hiển thị, chỉ thiếu hàng chip danh mục. Đổi lại phải tự kiểm tra `status` của từng kết quả, tự giữ lỗi riêng cho từng phần (ví dụ `categoriesError`), và giao diện ở trạng thái "thành công một phần" nên người dùng có thể không biết là danh mục đang bị thiếu nếu không có thông báo.

## 4. Debounce
Nếu đặt `setTimeout` thẳng trong `onChangeText` thì mỗi phím gõ tạo một hẹn giờ mới mà không huỷ cái cũ, nên 10 ký tự vẫn gây 10 lần lọc (chỉ chậm đi 400 ms chứ không gộp lại thành một). Hàm dọn dẹp `return () => clearTimeout(t)` chạy mỗi khi `value` đổi hoặc component bị gỡ, nên chỉ hẹn giờ của lần gõ cuối cùng còn sống; nhờ vậy tránh áp dụng giá trị cũ, và tránh gọi `setState` sau khi component đã unmount (báo lỗi/rò rỉ bộ nhớ).

## 5. Code bổ sung — sắp xếp theo giá
Thêm một state `sort` và sửa một chỗ trong `visibleBooks` (file `src/screens/HomeScreen.tsx`); nút chip "Giá: mặc định / tăng dần ↑ / giảm dần ↓" bấm để xoay vòng ba trạng thái.

```tsx
const [sort, setSort] = useState<"asc" | "desc" | null>(null);

const visibleBooks = useMemo(() => {
  const filtered = filterBooks(books, { keyword: debouncedKeyword, categoryId, priceRange });
  if (sort === null) return filtered;
  // sắp xếp trên BẢN SAO để không làm đổi mảng books gốc
  return [...filtered].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
}, [books, debouncedKeyword, categoryId, priceRange, sort]);
```
