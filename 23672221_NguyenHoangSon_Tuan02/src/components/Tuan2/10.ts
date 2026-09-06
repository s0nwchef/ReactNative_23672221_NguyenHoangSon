function simulateTask(shouldFail: boolean): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Something went wrong"));
      } else {
        resolve("Task done");
      }
    }, 1000);
  });
}

export { simulateTask };
