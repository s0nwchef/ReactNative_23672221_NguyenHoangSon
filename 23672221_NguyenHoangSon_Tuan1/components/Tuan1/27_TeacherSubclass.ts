import { Person } from "./01_PersonClass";

class Teacher extends Person {
  subject: string;
  private experience: number;

  constructor(name: string, age: number, subject: string, experience: number = 0) {
    super(name, age);
    this.subject = subject;
    this.experience = experience;
  }

  introduce(): string {
    return `Xin chào, tôi là ${this.name}, giáo viên môn ${this.subject} với ${this.experience} năm kinh nghiệm.`;
  }

  teach(): string {
    return `${this.name} đang dạy môn ${this.subject}.`;
  }

  getExperience(): number {
    return this.experience;
  }

  setExperience(years: number): void {
    if (years >= 0) {
      this.experience = years;
    }
  }

  displayInfo(): string {
    return `Giáo viên: ${this.name} | Tuổi: ${this.age} | Môn: ${this.subject} | Kinh nghiệm: ${this.experience} năm`;
  }
}

export { Teacher };
