class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error("Chiều rộng và chiều cao phải lớn hơn 0");
    }
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

  isSquare(): boolean {
    return this.width === this.height;
  }

  displayInfo(): string {
    return `Hình chữ nhật: ${this.width} x ${this.height} | Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

export { Rectangle };
