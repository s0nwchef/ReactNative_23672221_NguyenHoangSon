class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  static describe(): string {
    return "Shape là một hình học cơ bản với diện tích và chu vi.";
  }

  static compareArea(shape1: { area: number }, shape2: { area: number }): string {
    if (shape1.area > shape2.area) {
      return "Hình 1 có diện tích lớn hơn hình 2";
    } else if (shape1.area < shape2.area) {
      return "Hình 2 có diện tích lớn hơn hình 1";
    }
    return "Cả hai hình có diện tích bằng nhau";
  }

  static getShapeCount(shapes: Shape[]): number {
    return shapes.length;
  }

  static createCircle(radius: number): { name: string; radius: number; area: number } {
    return {
      name: "Circle",
      radius: radius,
      area: Math.PI * radius * radius
    };
  }

  static createRectangle(width: number, height: number): 
  { name: string; width: number; height: number; area: number } {
    return {
      name: "Rectangle",
      width: width,
      height: height,
      area: width * height
    };
  }

  displayInfo(): string {
    return `Hình: ${this.name}`;
  }
}

export { Shape };
