// BẢN GỘP — Tab "Danh mục": tài liệu gốc không mô tả riêng màn này (thuộc Giờ 2),
// nên ở đây tái dùng lại CategoryChips + BookGrid đã có sẵn để tab có nội dung
// thật, không chỉ là placeholder — vẫn đúng tinh thần "chỉ layout tĩnh".
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { BOOKS } from "../data";

export function CategoryScreen({ onPressBook }: { onPressBook: (id: number) => void }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Danh mục</Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CategoryChips />
        <Text style={styles.sectionTitle}>Tất cả sách</Text>
        <BookGrid books={BOOKS} onPressBook={onPressBook} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F8FAFC" },
  title: {
    fontSize: 18,
    fontWeight: "800",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#111827",
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    // chỉ cần chừa cho TabBar (64) vì tab này không có FloatingCartButton.
    paddingBottom: 84,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginTop: 16,
    marginBottom: 10,
  },
});
