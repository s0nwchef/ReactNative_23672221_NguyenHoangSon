import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TabBar, TabKey } from "./components/TabBar";
import { HomeScreen } from "./screens/HomeScreen";
import { CategoryScreen } from "./screens/CategoryScreen";
import { CartScreen } from "./screens/CartScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { BOOKS, CART_ITEMS } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(CART_ITEMS.length);

  const selectedBook = BOOKS.find((b) => b.id === selectedBookId) ?? null;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.body}>
        {selectedBook ? (
          // Chi tiết sách CHE TOÀN BỘ vùng body, kể cả TabBar phía dưới ->
          // đúng cấu trúc "3 vùng, không vùng nào chồng lấp" của riêng màn này.
          <BookDetailScreen
            book={selectedBook}
            onBack={() => setSelectedBookId(null)}
            onAddToCart={() => setCartCount((n) => n + 1)}
          />
        ) : (
          <>
            {activeTab === "home" && (
              <HomeScreen
                cartCount={cartCount}
                onPressBook={setSelectedBookId}
                onPressCart={() => setActiveTab("cart")}
              />
            )}
            {activeTab === "category" && <CategoryScreen onPressBook={setSelectedBookId} />}
            {activeTab === "cart" && <CartScreen items={CART_ITEMS} />}
            {activeTab === "account" && <AccountPlaceholder />}
            <TabBar active={activeTab} onChange={setActiveTab} />
          </>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function AccountPlaceholder() {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderTitle}>Tài khoản</Text>
      <Text style={styles.placeholderText}>
        Tài liệu gốc không mô tả nội dung tab này — để trống, chỉ giữ layout của TabBar.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FFFFFF" },
  body: { flex: 1 },
  placeholder: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, paddingBottom: 84 },
  placeholderTitle: { fontSize: 18, fontWeight: "800", color: "#111827", marginBottom: 8 },
  placeholderText: { textAlign: "center", color: "#5B6B7F" },
});
