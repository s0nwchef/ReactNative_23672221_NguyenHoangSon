function multiplyByThree(value: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(value * 3), 1000);
  });
}

async function runMultiply(value: number): Promise<void> {
  const result: number = await multiplyByThree(value);
  console.log(result);
}

export { multiplyByThree, runMultiply };
