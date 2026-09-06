interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000);
  });
}

export { fetchUser, User };
