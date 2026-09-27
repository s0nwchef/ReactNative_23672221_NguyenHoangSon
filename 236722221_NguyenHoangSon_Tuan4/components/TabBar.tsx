// GIỜ 5 — Bài tập 1: Thanh Tab Bar dưới cùng (giao diện tĩnh, chưa dùng thư viện
// navigation thật — chỉ chuyển màn bằng useState ở App.tsx, đúng yêu cầu tài liệu).
//
// SO SÁNH 2 CÁCH ĐẶT TAB BAR (theo gợi ý của đề bài):
//
// 1) position: 'absolute' ở đáy màn hình (CÁCH ĐANG DÙNG Ở DƯỚI):
//    - Tab bar "nổi" đè lên trên nội dung, thoát khỏi luồng flex bình thường.
//    - Ưu điểm: layout phía trên (ScrollView, các tab con...) không cần biết
//      đến sự tồn tại của tab bar, cứ chiếm flex:1 như bình thường.
//    - Nhược điểm: PHẢI tự chừa paddingBottom/marginBottom (đúng bằng chiều
//      cao tab bar, 64) cho nội dung cuộn phía trên, nếu không phần tử cuối
//      sẽ bị tab bar che mất — dễ quên, dễ lệch khi đổi chiều cao tab bar.
//    - Dùng khi: muốn nội dung có thể "chạy" ẩn hiện dưới tab bar (hiệu ứng
//      mờ dần/blur như iOS), hoặc tab bar cần nổi trên nhiều màn hình con
//      dùng chung ở 1 cấp cha (như App.tsx đang làm ở đây).
//
// 2) Đặt cố định NGOÀI ScrollView, cùng cấp trong layout row/column bình
//    thường (không set position, chỉ cần height cố định + để nó là anh em
//    liền kề của ScrollView flex:1 trong 1 View flexDirection:'column'):
//    - Ưu điểm: không cần tính toán padding bù trừ, không có nguy cơ đè lên
//      nội dung — flexbox tự động chừa đúng chỗ cho tab bar.
//    - Nhược điểm: tab bar luôn CHIẾM CHỖ thật trong layout, không thể cho
//      nội dung chạy xuyên qua/mờ dưới nó, và nếu nhiều màn hình con muốn
//      dùng chung 1 tab bar thì mỗi màn phải tự đặt ScrollView bên trong,
//      tab bar không thể "trồi" lên trên tất cả bằng 1 lần đặt ở cha chung.
//    - Dùng khi: giao diện đơn giản, chỉ 1 màn hình, không cần hiệu ứng nổi,
//      và muốn code chắc chắn không bao giờ bị che khuất do quên padding.
//
// -> Bài này chọn cách (1) vì tab bar cần dùng chung cho nhiều tab/nhiều
//    màn hình khác nhau ở App.tsx (đặt 1 lần ở ngoài, tab con chỉ lo phần
//    nội dung của mình).
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export type TabKey = "home" | "category" | "cart" | "account";

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "home", label: "Trang chủ", icon: "🏠" },
  { key: "category", label: "Danh mục", icon: "📂" },
  { key: "cart", label: "Giỏ hàng", icon: "🛒" },
  { key: "account", label: "Tài khoản", icon: "👤" },
];

export function TabBar({ active, onChange }: { active: TabKey; onChange: (key: TabKey) => void }) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        return (
          <Pressable
            key={tab.key}
            style={styles.tabItem} // flex:1 -> 4 mục chia đều bằng nhau theo chiều ngang
            onPress={() => onChange(tab.key)}
          >
            <Text style={[styles.icon, isActive && styles.iconActive]}>{tab.icon}</Text>
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: "absolute", // neo cố định đáy màn hình, nổi trên ScrollView bên trên
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row", // 4 mục xếp ngang
    height: 64,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  tabItem: {
    flex: 1, // chia đều 1/4 bề rộng cho mỗi mục, không cần tính width tay
    flexDirection: "column", // icon trên, chữ dưới
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  icon: {
    fontSize: 18,
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
  },
  label: {
    fontSize: 11,
    color: "#9CA3AF",
  },
  labelActive: {
    color: "#4338CA", // màu nổi bật cho mục đang chọn
    fontWeight: "700",
  },
});
