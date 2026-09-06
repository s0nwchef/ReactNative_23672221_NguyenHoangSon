function helloAsync(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}

export { helloAsync };
