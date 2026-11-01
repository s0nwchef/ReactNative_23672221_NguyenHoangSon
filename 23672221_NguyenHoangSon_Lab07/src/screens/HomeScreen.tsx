import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { CategoryChips } from "../components/CategoryChips";
import { PriceFilter } from "../components/PriceFilter";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { EmptyState } from "../components/EmptyState";
import { LoadingView } from "../components/LoadingView";
import { ErrorView } from "../components/ErrorView";
import { getBooks } from "../services/bookService";
import { getCategories } from "../services/categoryService";
import { getErrorMessage } from "../api/client";
import { useDebounce } from "../hooks/useDebounce";
import { filterBooks, PriceRange } from "../utils/filters";
import { useCart } from "../store/hooks";
import { Book, Category } from "../types";
import { TabScreenProps } from "../navigation/types";
import { colors, radius } from "../theme";

type Sort = "asc" | "desc" | null;
const SORT_LABEL: Record<"none" | "asc" | "desc", string> = { none: "Giá: mặc định", asc: "Giá: tăng dần ↑", desc: "Giá: giảm dần ↓" };

export function HomeScreen({ navigation, route }: TabScreenProps<"Home">) {
  const { totalQuantity } = useCart();   // BT7.3d

  // BT7.5b: state books, categories, loading, error
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // BT7.5b: gọi SONG SONG hai API bằng Promise.all
  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [b, c] = await Promise.all([getBooks(), getCategories()]);
      setBooks(b);
      setCategories(c);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const [searchOpen, setSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<PriceRange>(null);
  const [sort, setSort] = useState<Sort>(null);   // câu hỏi bổ sung 5: sắp xếp theo giá

  // BT7.7a: chỉ lọc sau khi người dùng ngừng gõ 400 ms
  const debouncedKeyword = useDebounce(keyword, 400);

  // BT7.7c: lọc kết hợp từ khoá + danh mục + khoảng giá; câu 5: sắp xếp trên bản sao
  const visibleBooks = useMemo(() => {
    const filtered = filterBooks(books, { keyword: debouncedKeyword, categoryId, priceRange });
    if (sort === null) return filtered;
    return [...filtered].sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));
  }, [books, debouncedKeyword, categoryId, priceRange, sort]);

  // BT7.8b: nhận categoryId từ tab Danh mục rồi xoá params để không áp dụng lại
  useEffect(() => {
    const id = route.params?.categoryId;
    if (id !== undefined) {
      setCategoryId(id);
      navigation.setParams({ categoryId: undefined });
    }
  }, [route.params?.categoryId, navigation]);

  // BT7.7d, BT7.7e: xoá bộ lọc, chỉ hiện nút khi đang có bộ lọc
  const hasFilter = keyword !== "" || categoryId !== null || priceRange !== null;
  const clearFilters = () => {
    setKeyword("");
    setCategoryId(null);
    setPriceRange(null);
  };

  const nextSort = () => setSort((s) => (s === null ? "asc" : s === "asc" ? "desc" : null));

  return (
    <View style={styles.container}>
      <Header title="📚 BookStore" onSearchPress={() => setSearchOpen((v) => !v)} />
      {searchOpen && (
        <SearchBar
          value={keyword}
          onChangeText={setKeyword}
          onClose={() => {
            setSearchOpen(false);
            setKeyword("");
          }}
        />
      )}
      {/* BT7.5c: loading → LoadingView · lỗi → ErrorView (có nút Thử lại) · còn lại → lưới sách */}
      {loading ? (
        <LoadingView label="Đang tải sách…" />
      ) : error ? (
        <ErrorView message={error} onRetry={load} />
      ) : (
        <BookGrid
          data={visibleBooks}
          onPressBook={(b) => navigation.navigate("BookDetail", { bookId: b.id })}   // BT7.2a
          ListHeaderComponent={
            <View>
              <CategoryChips categories={categories} selectedId={categoryId} onSelect={setCategoryId} />
              <PriceFilter value={priceRange} onChange={setPriceRange} />
              <View style={styles.actions}>
                <Pressable style={styles.chip} onPress={nextSort}>
                  <Text style={styles.chipText}>{SORT_LABEL[sort ?? "none"]}</Text>
                </Pressable>
                {hasFilter && (
                  <Pressable style={[styles.chip, styles.chipClear]} onPress={clearFilters}>
                    <Text style={[styles.chipText, styles.chipClearText]}>✕ Xóa bộ lọc</Text>
                  </Pressable>
                )}
              </View>
            </View>
          }
          ListEmptyComponent={
            <EmptyState
              emoji="🔎"
              title="Không tìm thấy sách phù hợp"
              message="Hãy thử từ khoá khác hoặc bỏ bớt bộ lọc."
              actionLabel="Xóa bộ lọc"
              onAction={clearFilters}
            />
          }
        />
      )}
      <FloatingCartButton count={totalQuantity} onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  actions: { flexDirection: "row", gap: 8, paddingHorizontal: 12, paddingBottom: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.pill, backgroundColor: "#fff", borderWidth: 1, borderColor: colors.line },
  chipText: { color: colors.text, fontWeight: "600", fontSize: 12 },
  chipClear: { backgroundColor: "#FEE2E2", borderColor: "#FEE2E2" },
  chipClearText: { color: colors.danger },
});
