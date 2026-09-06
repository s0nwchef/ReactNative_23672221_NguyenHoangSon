function square(value: number): Promise<number> {
  return new Promise<number>((resolve) => resolve(value * value));
}

function double(value: number): Promise<number> {
  return new Promise<number>((resolve) => resolve(value * 2));
}

function addFive(value: number): Promise<number> {
  return new Promise<number>((resolve) => resolve(value + 5));
}

export { addFive, double, square };
