import { Student } from "./02_StudentSubclass";
import { Teacher } from "./27_TeacherSubclass";

class School {
  name: string;
  address: string;
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  removeStudent(name: string): boolean {
    const index = this.students.findIndex(s => s.name === name);
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  }

  removeTeacher(name: string): boolean {
    const index = this.teachers.findIndex(t => t.name === name);
    if (index !== -1) {
      this.teachers.splice(index, 1);
      return true;
    }
    return false;
  }

  getStudentCount(): number {
    return this.students.length;
  }

  getTeacherCount(): number {
    return this.teachers.length;
  }

  displayStudents(): string {
    let result = `Danh sach hoc sinh (${this.students.length}):\n`;
    this.students.forEach((student, index) => {
      result += `  ${index + 1}. ${student.displayInfo()}\n`;
    });
    return result;
  }

  displayTeachers(): string {
    let result = `Danh sach giao vien (${this.teachers.length}):\n`;
    this.teachers.forEach((teacher, index) => {
      result += `  ${index + 1}. ${teacher.displayInfo()}\n`;
    });
    return result;
  }

  displayInfo(): string {
    let result = "=".repeat(60) + "\n";
    result += `TRUONG: ${this.name}\n`;
    result += `Dia chi: ${this.address}\n`;
    result += "=".repeat(60) + "\n";
    result += this.displayTeachers();
    result += this.displayStudents();
    result += "-".repeat(60) + "\n";
    result += `Tong so giao vien: ${this.getTeacherCount()}\n`;
    result += `Tong so hoc sinh: ${this.getStudentCount()}\n`;
    result += "-".repeat(60);
    return result;
  }
}

export { School };
