interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
  });
}

async function fetchUsers(ids: number[]): Promise<User[]> {
  const users: User[] = await Promise.all(ids.map((id: number) => fetchUser(id)));
  return users;
}

export { fetchUser, fetchUsers, User };
