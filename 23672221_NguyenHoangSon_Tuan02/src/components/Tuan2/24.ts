interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface NewTodoInput {
  userId: number;
  title: string;
  completed: boolean;
}

async function postData(input: NewTodoInput): Promise<Todo> {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const created: Todo = await response.json();
  return created;
}

export { NewTodoInput, postData, Todo };
