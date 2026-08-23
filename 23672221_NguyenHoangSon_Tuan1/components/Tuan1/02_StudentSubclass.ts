import { Person } from "./01_PersonClass";

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): string {
    const baseInfo = this.displayInfo();
    return `${baseInfo} Tôi là sinh viên với điểm số: ${this.grade}.`;
  }

  displayInfo(): string {
    return `Sinh viên: ${this.name}, Tuổi: ${this.age}, Điểm: ${this.grade}`;
  }
}

export { Student };
