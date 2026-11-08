import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "../components/Header";
import { CartItemRow } from "../components/CartItemRow";
import { PrimaryButton } from "../components/PrimaryButton";

import { EmptyState } from "../components/EmptyState";
import { useAuth, useCart } from "../store/hooks";
import { confirmDialog } from "../utils/dialog"; // đã viết sẵn — dùng ở BT8.7a
import { TabScreenProps } from "../navigation/types";
import { colors, formatPrice, radius } from "../theme";

// BT8.C2: mã giảm giá cố định phía client
const COUPONS: Record<string, { label: string; discount: (subtotal: number) => number }> = {
  SALE10: { label: "Giảm 10%", discount: (s) => Math.round(s * 0.1) },
  GIAM50K: { label: "Giảm 50.000đ", discount: (s) => Math.min(50000, s) },
};

export function CartScreen({ navigation }: TabScreenProps<"Cart">) {
  const { items, totalPrice, setQty, remove } = useCart();
  const { isLoggedIn } = useAuth();

  // BT8.C2: mã giảm giá
  const [couponInput, setCouponInput] = useState("");
  const [coupon, setCoupon] = useState<string | null>(null); // mã đã áp dụng thành công
  const [couponError, setCouponError] = useState(false);

  // Giảm giá tính lại từ totalPrice mỗi lần render → đổi số lượng thì giảm giá cũng cập nhật theo
  const discount = coupon ? COUPONS[coupon].discount(totalPrice) : 0;
  const finalTotal = totalPrice - discount;

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (COUPONS[code]) {
      setCoupon(code);
      setCouponError(false);
    } else {
      setCoupon(null);
      setCouponError(true);
    }
  };

  // BT8.7a: xóa sản phẩm có XÁC NHẬN (confirmDialog chạy được cả web lẫn điện thoại)
  const askRemove = (bookId: number) => {
    const item = items.find((i) => i.bookId === bookId);
    confirmDialog("Xóa sản phẩm", `Xóa "${item?.title ?? "sản phẩm"}" khỏi giỏ hàng?`, () => remove(bookId));
  };

  // BT8.4: bảo vệ Checkout — chưa đăng nhập thì sang Login kèm "đích đến" để quay lại sau khi đăng nhập
  const goCheckout = () => {
    if (isLoggedIn) navigation.navigate("Checkout", { total: finalTotal });
    else navigation.navigate("Login", { redirectTo: "Checkout", total: finalTotal });
  };

  return (
    <View style={styles.container}>
      <Header title="🛒 Giỏ hàng" />
      <FlatList
        data={items}
        keyExtractor={(i) => String(i.bookId)}
        renderItem={({ item }) => <CartItemRow item={item} onChangeQty={setQty} onRemove={askRemove} />}
        contentContainerStyle={{ paddingVertical: 8, flexGrow: 1 }}
        ListEmptyComponent={
          <EmptyState emoji="🛒" title="Giỏ hàng trống" message="Hãy chọn vài cuốn sách yêu thích nhé." actionLabel="Khám phá sách" onAction={() => navigation.navigate("Home")} />
        }
      />
      {items.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.couponRow}>
            <TextInput
              style={[styles.couponInput, couponError ? styles.couponInputError : null]}
              value={couponInput}
              onChangeText={setCouponInput}
              placeholder="Mã giảm giá (SALE10)"
              placeholderTextColor={colors.muted}
              autoCapitalize="characters"
              autoCorrect={false}
              onSubmitEditing={applyCoupon}
            />
            <View style={styles.couponBtn}>
              <PrimaryButton title="Áp dụng" onPress={applyCoupon} />
            </View>
          </View>
          {coupon ? (
            <Text style={styles.couponOk}>Đã áp dụng {coupon}: {COUPONS[coupon].label}</Text>
          ) : couponError ? (
            <Text style={styles.couponBad}>Mã giảm giá không hợp lệ</Text>
          ) : null}

          <View style={styles.line}><Text style={styles.muted}>Tạm tính</Text><Text style={styles.value}>{formatPrice(totalPrice)}</Text></View>
          {discount > 0 && (
            <View style={styles.line}><Text style={styles.muted}>Giảm giá</Text><Text style={styles.discount}>-{formatPrice(discount)}</Text></View>
          )}
          <View style={styles.line}><Text style={styles.total}>Tổng cộng</Text><Text style={styles.total}>{formatPrice(finalTotal)}</Text></View>
          <PrimaryButton title="Thanh toán" onPress={goCheckout} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  footer: { backgroundColor: "#fff", padding: 14, gap: 8, borderTopWidth: 1, borderTopColor: colors.line },
  couponRow: { flexDirection: "row", gap: 8, alignItems: "center" },
  couponInput: { flex: 1, borderWidth: 1, borderColor: colors.line, borderRadius: radius.md, paddingHorizontal: 12, paddingVertical: 10, color: colors.text, backgroundColor: colors.bg },
  couponInputError: { borderColor: colors.danger },
  couponBtn: { minWidth: 100 },
  couponOk: { color: colors.success, fontWeight: "700" },
  couponBad: { color: colors.danger },
  line: { flexDirection: "row", justifyContent: "space-between" },
  muted: { color: colors.muted },
  value: { fontWeight: "700", color: colors.text },
  discount: { fontWeight: "700", color: colors.success },
  total: { fontSize: 17, fontWeight: "800", color: colors.navy },
});
