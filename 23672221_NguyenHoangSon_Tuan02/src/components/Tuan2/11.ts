function delay<T>(value: T, time: number): Promise<T> {
  return new Promise<T>((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

async function helloAsync(): Promise<void> {
  const message: string = await delay<string>("Hello Async", 2000);
  console.log(message);
}

export { delay, helloAsync };
