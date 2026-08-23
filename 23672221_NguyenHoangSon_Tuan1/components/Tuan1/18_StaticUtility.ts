class MathUtil {
  private constructor() {}
  static add(a: number, b: number): number { return a + b; }
  static subtract(a: number, b: number): number { return a - b; }
  static multiply(a: number, b: number): number { return a * b; }
  static divide(a: number, b: number): number | null { return b === 0 ? null : a / b; }
}

export { MathUtil };
