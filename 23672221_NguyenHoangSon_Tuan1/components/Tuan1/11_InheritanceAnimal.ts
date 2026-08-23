class Animal {
  constructor(public name: string, public age: number) {}
  sound(): string { return `${this.name} makes a sound.`; }
}

class Dog extends Animal {
  constructor(name: string, age: number, public breed: string) { super(name, age); }
  bark(): string { return `${this.name} barks: Woof woof!`; }
  sound(): string { return this.bark(); }
}

class Cat extends Animal {
  constructor(name: string, age: number, public color: string) { super(name, age); }
  meow(): string { return `${this.name} meows: Meow meow!`; }
  sound(): string { return this.meow(); }
}

export { Animal, Dog, Cat };
