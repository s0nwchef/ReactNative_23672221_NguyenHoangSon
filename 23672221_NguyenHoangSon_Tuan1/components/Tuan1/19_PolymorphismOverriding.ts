class Animal {
  constructor(public name: string) {}
  sound(): string { return `${this.name} makes a sound.`; }
}

class Dog extends Animal {
  sound(): string { return `${this.name} barks: Woof!`; }
}

class Cat extends Animal {
  sound(): string { return `${this.name} meows: Meow!`; }
}

function makeSound(animal: Animal): void { console.log(animal.sound()); }

export { Animal, Dog, Cat, makeSound };
