function getRandomNumber(): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 500);
  });
}

export { getRandomNumber };
