import { Animal, Dog, Cat } from "./11_InheritanceAnimal";

class Bird extends Animal {
  species: string;

  constructor(name: string, age: number, species: string) {
    super(name, age);
    this.species = species;
  }

  sound(): string {
    return `${this.name} hót: Chíp chíp!`;
  }

  fly(): string {
    return `${this.name} đang bay.`;
  }
}

class Snake extends Animal {
  length: number;

  constructor(name: string, age: number, length: number) {
    super(name, age);
    this.length = length;
  }

  sound(): string {
    return `${this.name} rít: Ssssss!`;
  }

  crawl(): string {
    return `${this.name} đang bò.`;
  }
}

function makeSound(animal: Animal): void {
  console.log(animal.sound());
}

function showAnimalInfo(animal: Animal): void {
  console.log(animal.displayInfo());
  console.log(`  → ${animal.sound()}`);
}

export { Bird, Snake, makeSound, showAnimalInfo };
