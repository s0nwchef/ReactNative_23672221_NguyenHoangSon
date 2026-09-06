function getNumberAfterDelay(): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

export { getNumberAfterDelay };
