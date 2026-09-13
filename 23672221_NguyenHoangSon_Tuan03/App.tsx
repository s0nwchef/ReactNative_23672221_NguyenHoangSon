import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar as RNStatusBar,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleBookPress = (id: number) => {
    const book = BOOKS.find((b) => b.id === id);
    if (book) {
      Alert.alert('Chi tiết sách', `${book.title}\nTác giả: ${book.author}\nGiá: ${book.price.toLocaleString()} đ`);
    }
  };

  const handleCartPress = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        {/* Header cố định trên cùng */}
        <Header />

        {/* Nội dung cuộn: Danh mục + Lưới sách */}
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Danh mục</Text>
          <CategoryChips />

          <Text style={styles.sectionTitle}>Lưới sách</Text>
          <BookGrid books={BOOKS} onPressBook={handleBookPress} />
        </ScrollView>

        {/* Nút giỏ hàng nổi góc dưới màn hình */}
        <FloatingCartButton count={cartCount} onPress={handleCartPress} />

        {/* StatusBar chữ/icon màu sáng trên nền tối của Header */}
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1B4B', // Nền safe area trên cùng đồng màu với Header
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    position: 'relative', // Containing block cho FloatingCartButton absolute
  },
  content: {
    padding: 16,
    paddingBottom: 100, // Chừa khoảng trống để FloatingCartButton không che sách cuối
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginTop: 14,
    marginBottom: 10,
  },
});
