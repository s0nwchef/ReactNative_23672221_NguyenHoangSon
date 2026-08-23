abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  displayInfo(): string {
    return `Hình học - Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

class Square extends Shape {
  side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }

  perimeter(): number {
    return 4 * this.side;
  }

  displayInfo(): string {
    return `Hình vuông (cạnh: ${this.side}) | Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  displayInfo(): string {
    return `Hình tròn (bán kính: ${this.radius}) | Diện tích: ${this.area().toFixed(2)} | Chu vi: ${this.perimeter().toFixed(2)}`;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

  displayInfo(): string {
    return `Hình chữ nhật (${this.width}x${this.height}) | Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

export { Shape, Square, Circle, Rectangle };
