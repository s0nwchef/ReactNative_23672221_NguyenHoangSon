interface User {
  id: number;
  name: string;
}

function fetchUser(id: number, delayMs: number): Promise<User> {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), delayMs);
  });
}

function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  const timeout: Promise<never> = new Promise<never>((_resolve, reject) => {
    setTimeout(() => reject(new Error("Request timed out")), timeoutMs);
  });
  return Promise.race([promise, timeout]);
}

export { fetchUser, User, withTimeout };
