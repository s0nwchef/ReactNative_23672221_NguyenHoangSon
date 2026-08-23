class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): string {
    return `Tôi tên là ${this.name}, năm nay tôi ${this.age} tuổi.`;
  }
}

export { Person };
