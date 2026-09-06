function readAndFilterEvenNumbers(numbers: number[]): Promise<number[]> {
  return new Promise<number[]>((resolve) => {
    setTimeout(() => {
      const evenNumbers: number[] = numbers.filter((n: number) => n % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

export { readAndFilterEvenNumbers };
