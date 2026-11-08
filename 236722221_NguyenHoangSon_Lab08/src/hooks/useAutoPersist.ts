import { useEffect } from "react";
import { saveJSON } from "../storage/storage";

// HOOK CHUNG: mỗi khi `value` đổi (và đã nạp xong dữ liệu cũ) → tự ghi vào AsyncStorage.
// Dùng cho cart, wishlist… — không phải viết lại effect ở từng nơi.
export function useAutoPersist<T>(key: string, value: T, ready: boolean) {
  // BT8.7b: cờ ready chặn việc ghi quá sớm (lần render đầu value còn rỗng, sẽ đè dữ liệu cũ trước khi kịp đọc)
  useEffect(() => {
    if (ready) saveJSON(key, value);
  }, [key, value, ready]);
}
