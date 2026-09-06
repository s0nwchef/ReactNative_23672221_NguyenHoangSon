async function fetchWithRetry<T>(url: string, retries: number): Promise<T> {
  for (let attempt: number = 1; attempt <= retries; attempt++) {
    try {
      const response: Response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data: T = await response.json();
      return data;
    } catch (error) {
      const err = error as Error;
      console.log(`Lần thử ${attempt} thất bại: ${err.message}`);
      if (attempt === retries) {
        throw err;
      }
    }
  }
  throw new Error("Không thể lấy dữ liệu sau nhiều lần thử");
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export { fetchWithRetry, Todo };
