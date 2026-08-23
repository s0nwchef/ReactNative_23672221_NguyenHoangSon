interface Flyable { fly(): string; }
interface Swimmable { swim(): string; }

class Bird implements Flyable {
  constructor(public name: string) {}
  fly(): string { return `${this.name} đang bay`; }
}

class Fish implements Swimmable {
  constructor(public name: string) {}
  swim(): string { return `${this.name} đang bơi`; }
}

class Duck implements Flyable, Swimmable {
  constructor(public name: string) {}
  fly(): string { return `${this.name} đang bay`; }
  swim(): string { return `${this.name} đang bơi`; }
}

export { Flyable, Swimmable, Bird, Fish, Duck };
