interface IAnimal {
  name: string;
  species: string;
  sound(): string;
  move(): string;
}

interface IFeedable {
  eat(food: string): string;
}

interface ISleepable {
  sleep(hours: number): string;
}

type AnimalInfo = {
  name: string;
  species: string;
  age: number;
};

class BasicAnimal implements IAnimal, IFeedable, ISleepable {
  name: string;
  species: string;
  age: number;

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  sound(): string {
    return `${this.name} phát ra tiếng kêu.`;
  }

  move(): string {
    return `${this.name} đang di chuyển.`;
  }

  eat(food: string): string {
    return `${this.name} đang ăn ${food}.`;
  }

  sleep(hours: number): string {
    return `${this.name} đang ngủ trong ${hours} giờ.`;
  }

  displayInfo(): string {
    return `${this.name} (${this.species}) - ${this.age} tuổi`;
  }
}

export { IAnimal, IFeedable, ISleepable, AnimalInfo, BasicAnimal };
