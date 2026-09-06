interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodoById(id: number): Promise<Todo> {
  const response: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data: Todo = await response.json();
  return data;
}

export { fetchTodoById, Todo };
