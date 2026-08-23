interface Student { name: string; grade: string; }
interface Teacher { name: string; subject: string; }

class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];
  
  addStudent(student: Student): void { this.students.push(student); }
  addTeacher(teacher: Teacher): void { this.teachers.push(teacher); }
  getStudents(): Student[] { return this.students; }
  getTeachers(): Teacher[] { return this.teachers; }
  displayInfo(): string {
    return `School: ${this.students.length} students, ${this.teachers.length} teachers`;
  }
}

export { School, Student, Teacher };
