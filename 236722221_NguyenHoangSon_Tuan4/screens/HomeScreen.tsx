// GIỜ 4 — Bài tập 1: Màn hình Trang chủ hoàn chỉnh
// Ghép: Header (cố định, KHÔNG cuộn) + ScrollView (Chips + Grid, CUỘN được)
// + FloatingCartButton (absolute, cùng cấp với ScrollView, KHÔNG cuộn theo).
//
// BẢN GỘP Giờ 4 + Giờ 5: màn Home giờ nằm PHÍA TRÊN TabBar dùng chung (vẽ ở
// App.tsx, cao TAB_BAR_HEIGHT). Nút nổi phải "trồi" lên khỏi TabBar
// (bottomOffset), và ScrollView phải chừa đủ paddingBottom cho CẢ nút nổi
// LẪN TabBar, nếu không phần tử cuối của Grid sẽ bị 1 trong 2 (hoặc cả 2) che.
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { BOOKS } from "../data";

const TAB_BAR_HEIGHT = 64; // phải khớp với height của TabBar ở components/TabBar.tsx
const CART_BUTTON_BOTTOM = TAB_BAR_HEIGHT + 16; // đẩy nút nổi lên trên TabBar 16px

export function HomeScreen({
  cartCount,
  onPressBook,
  onPressCart,
}: {
  cartCount: number;
  onPressBook: (id: number) => void;
  onPressCart: () => void;
}) {
  return (
    // flex:1 + position mặc định 'relative' -> làm containing block cho
    // FloatingCartButton absolute bên dưới, thoát khỏi mọi quan hệ cha khác.
    <View style={styles.screen}>
      <Header />

      <ScrollView
        style={styles.scroll} // flex:1 bắt buộc trên chính ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <CategoryChips />

        <Text style={styles.sectionTitle}>Sách nổi bật</Text>
        <BookGrid books={BOOKS} onPressBook={onPressBook} />
      </ScrollView>

      {/* Nút nổi nằm NGOÀI ScrollView, song song với nó -> không bị cuộn theo
          nội dung, luôn nổi cố định ở góc màn hình như đúng yêu cầu. */}
      <FloatingCartButton count={cartCount} onPress={onPressCart} bottomOffset={CART_BUTTON_BOTTOM} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    // paddingBottom đủ lớn để phần tử cuối của Grid không bị FloatingCartButton
    // (đỉnh nút ở CART_BUTTON_BOTTOM + 56 ≈ 136px từ đáy) VÀ TabBar (64px, ở
    // App.tsx) che mất — cộng thêm khoảng thở nên chọn hẳn 180.
    paddingBottom: 180,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
    marginTop: 4,
  },
});
