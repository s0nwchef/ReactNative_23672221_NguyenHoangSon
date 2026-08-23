abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
}

class Square extends Shape {
  constructor(public side: number) { super(); }
  area(): number { return this.side * this.side; }
  perimeter(): number { return 4 * this.side; }
}

class Circle extends Shape {
  constructor(public radius: number) { super(); }
  area(): number { return Math.PI * this.radius * this.radius; }
  perimeter(): number { return 2 * Math.PI * this.radius; }
}

export { Shape, Square, Circle };
