interface Movable {
  move(): string;
  stop(): string;
  getPosition(): { x: number; y: number };
}

interface SpeedControllable {
  getSpeed(): number;
  setSpeed(speed: number): void;
}

class CarMovable implements Movable, SpeedControllable {
  brand: string;
  private position: { x: number; y: number } = { x: 0, y: 0 };
  private speed: number = 0;

  constructor(brand: string) {
    this.brand = brand;
  }

  move(): string {
    this.speed = 60;
    this.position.x += this.speed;
    return `${this.brand} đang di chuyển với tốc độ ${this.speed} km/h`;
  }

  stop(): string {
    this.speed = 0;
    return `${this.brand} đã dừng lại`;
  }

  getPosition(): { x: number; y: number } {
    return { ...this.position };
  }

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }
}

class RobotMovable implements Movable {
  name: string;
  private position: { x: number; y: number } = { x: 0, y: 0 };
  private isMoving: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  move(): string {
    this.isMoving = true;
    this.position.x += 10;
    this.position.y += 10;
    return `Robot ${this.name} đang di chuyển đến (${this.position.x}, ${this.position.y})`;
  }

  stop(): string {
    this.isMoving = false;
    return `Robot ${this.name} đã dừng lại tại (${this.position.x}, ${this.position.y})`;
  }

  getPosition(): { x: number; y: number } {
    return { ...this.position };
  }

  jump(): string {
    return `Robot ${this.name} đang nhảy`;
  }
}

class DroneMovable implements Movable {
  model: string;
  private position: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };

  constructor(model: string) {
    this.model = model;
  }

  move(): string {
    this.position.z += 50;
    return `Drone ${this.model} đang bay ở độ cao ${this.position.z}m`;
  }

  stop(): string {
    this.position.z = 0;
    return `Drone ${this.model} đã hạ cánh`;
  }

  getPosition(): { x: number; y: number } {
    return { x: this.position.x, y: this.position.y };
  }

  getAltitude(): number {
    return this.position.z;
  }
}

export { Movable, SpeedControllable, CarMovable, RobotMovable, DroneMovable };
