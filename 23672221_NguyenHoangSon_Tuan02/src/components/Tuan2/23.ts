interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchIncompleteTodos(): Promise<Todo[]> {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await response.json();
  return todos.filter((todo: Todo) => !todo.completed);
}

export { fetchIncompleteTodos, Todo };
