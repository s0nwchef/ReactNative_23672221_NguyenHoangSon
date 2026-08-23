class MathUtil {
  private constructor() {}

  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number | null {
    if (b === 0) {
      console.log("Không thể chia cho 0");
      return null;
    }
    return a / b;
  }

  static power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  static squareRoot(num: number): number | null {
    if (num < 0) {
      console.log("Không thể tính căn bậc 2 của số âm");
      return null;
    }
    return Math.sqrt(num);
  }

  static percentage(value: number, total: number): number {
    return (value / total) * 100;
  }

  static round(num: number, decimals: number = 2): number {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }
}

export { MathUtil };
