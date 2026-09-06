interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodoById(id: number): Promise<Todo> {
  const response: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data: Todo = await response.json();
  return data;
}

async function fetchAllStatuses(ids: number[]): Promise<void> {
  const results: PromiseSettledResult<Todo>[] = await Promise.allSettled(
    ids.map((id: number) => fetchTodoById(id))
  );

  results.forEach((result: PromiseSettledResult<Todo>, index: number) => {
    if (result.status === "fulfilled") {
      console.log(`Todo ${ids[index]}: thành công`, result.value);
    } else {
      console.log(`Todo ${ids[index]}: thất bại - ${result.reason}`);
    }
  });
}

export { fetchAllStatuses, fetchTodoById, Todo };
