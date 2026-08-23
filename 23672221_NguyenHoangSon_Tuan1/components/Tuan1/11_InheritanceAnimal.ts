class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sound(): string {
    return `${this.name} phát ra tiếng kêu.`;
  }

  displayInfo(): string {
    return `${this.name} - ${this.age} tuổi`;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  bark(): string {
    return `${this.name} sủa: Gâu gâu gâu!`;
  }

  sound(): string {
    return this.bark();
  }

  displayInfo(): string {
    return `${super.displayInfo()} - Giống: ${this.breed}`;
  }
}

class Cat extends Animal {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  meow(): string {
    return `${this.name} kêu: Meo meo meo!`;
  }

  sound(): string {
    return this.meow();
  }

  displayInfo(): string {
    return `${super.displayInfo()} - Màu: ${this.color}`;
  }
}

export { Animal, Dog, Cat };
