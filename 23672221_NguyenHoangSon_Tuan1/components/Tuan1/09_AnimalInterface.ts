interface IAnimal {
  name: string;
  sound(): string;
}

class BasicAnimal implements IAnimal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): string {
    return `${this.name} makes a sound.`;
  }

  move(): string {
    return `${this.name} is moving.`;
  }

  displayInfo(): string {
    return `${this.name} (${this.species})`;
  }
}

export { IAnimal, BasicAnimal };
