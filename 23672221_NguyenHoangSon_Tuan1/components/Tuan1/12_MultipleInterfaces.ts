interface Flyable {
  fly(): string;
  getMaxAltitude(): number;
}

interface Swimmable {
  swim(): string;
  getMaxDepth(): number;
}

class Bird implements Flyable {
  name: string;
  maxAltitude: number;

  constructor(name: string, maxAltitude: number) {
    this.name = name;
    this.maxAltitude = maxAltitude;
  }

  fly(): string {
    return `${this.name} đang bay ở độ cao ${this.maxAltitude}m`;
  }

  getMaxAltitude(): number {
    return this.maxAltitude;
  }

  displayInfo(): string {
    return `${this.name} - Bay tối đa: ${this.maxAltitude}m`;
  }
}

class Fish implements Swimmable {
  name: string;
  maxDepth: number;

  constructor(name: string, maxDepth: number) {
    this.name = name;
    this.maxDepth = maxDepth;
  }

  swim(): string {
    return `${this.name} đang bơi ở độ sâu ${this.maxDepth}m`;
  }

  getMaxDepth(): number {
    return this.maxDepth;
  }

  displayInfo(): string {
    return `${this.name} - Lặn tối đa: ${this.maxDepth}m`;
  }
}

class Duck implements Flyable, Swimmable {
  name: string;
  maxAltitude: number;
  maxDepth: number;

  constructor(name: string, maxAltitude: number, maxDepth: number) {
    this.name = name;
    this.maxAltitude = maxAltitude;
    this.maxDepth = maxDepth;
  }

  fly(): string {
    return `${this.name} đang bay ở độ cao ${this.maxAltitude}m`;
  }

  swim(): string {
    return `${this.name} đang bơi ở độ sâu ${this.maxDepth}m`;
  }

  getMaxAltitude(): number {
    return this.maxAltitude;
  }

  getMaxDepth(): number {
    return this.maxDepth;
  }

  displayInfo(): string {
    return `${this.name} - Bay: ${this.maxAltitude}m | Lặn: ${this.maxDepth}m`;
  }
}

export { Flyable, Swimmable, Bird, Fish, Duck };
