class AnimalBase {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected makeSound(): string {
    return "Động vật phát ra tiếng kêu";
  }

  public displaySound(): string {
    return `${this.name} says: ${this.makeSound()}`;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(newAge: number): void {
    this.age = newAge;
  }
}

class DogProtected extends AnimalBase {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  protected makeSound(): string {
    return "Gâu gâu gâu!";
  }

  public fetch(): string {
    return `${this.name} đang nhặt bóng`;
  }

  public displayInfo(): string {
    return `${this.name} - ${this.age} tuổi - Giống: ${this.breed}`;
  }
}

class CatProtected extends AnimalBase {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  protected makeSound(): string {
    return "Meo meo meo!";
  }

  public climb(): string {
    return `${this.name} đang leo cây`;
  }

  public displayInfo(): string {
    // Có thể truy cập protected age từ subclass
    return `${this.name} - ${this.age} tuổi - Màu: ${this.color}`;
  }
}

export { AnimalBase, DogProtected, CatProtected };
