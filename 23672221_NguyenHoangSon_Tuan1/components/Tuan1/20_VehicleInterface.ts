interface Vehicle {
  brand: string;
  model: string;
  year: number;
  start(): string;
  stop(): string;
  getInfo(): string;
}

class Car implements Vehicle {
  brand: string;
  model: string;
  year: number;
  private isRunning: boolean = false;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start(): string {
    this.isRunning = true;
    return `${this.brand} ${this.model} đã khởi động.`;
  }

  stop(): string {
    this.isRunning = false;
    return `${this.brand} ${this.model} đã dừng.`;
  }

  getInfo(): string {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }

  honk(): string {
    return `Bíp bíp!`;
  }
}

class Bike implements Vehicle {
  brand: string;
  model: string;
  year: number;
  private isRunning: boolean = false;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start(): string {
    this.isRunning = true;
    return `${this.brand} ${this.model} đã sẵn sàng.`;
  }

  stop(): string {
    this.isRunning = false;
    return `${this.brand} ${this.model} đã dừng lại.`;
  }

  getInfo(): string {
    return `Bike: ${this.brand} ${this.model} (${this.year})`;
  }

  ring(): string {
    return `Ring ring!`;
  }
}

export { Vehicle, Car, Bike };
