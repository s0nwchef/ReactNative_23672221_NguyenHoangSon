interface Movable { move(): string; }

class CarMovable implements Movable {
  constructor(public brand: string) {}
  move(): string { return `${this.brand} đang di chuyển.`; }
}

class RobotMovable implements Movable {
  constructor(public name: string) {}
  move(): string { return `Robot ${this.name} đang di chuyển.`; }
}

export { Movable, CarMovable, RobotMovable };
