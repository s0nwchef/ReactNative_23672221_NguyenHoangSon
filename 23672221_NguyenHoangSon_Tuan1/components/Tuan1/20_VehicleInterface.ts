interface Vehicle {
  brand: string;
  model: string;
  start(): string;
  stop(): string;
}

class Car implements Vehicle {
  constructor(public brand: string, public model: string) {}
  start(): string { return `${this.brand} ${this.model} đã khởi động.`; }
  stop(): string { return `${this.brand} ${this.model} đã dừng.`; }
}

class Bike implements Vehicle {
  constructor(public brand: string, public model: string) {}
  start(): string { return `${this.brand} ${this.model} đã sẵn sàng.`; }
  stop(): string { return `${this.brand} ${this.model} đã dừng.`; }
}

export { Vehicle, Car, Bike };
