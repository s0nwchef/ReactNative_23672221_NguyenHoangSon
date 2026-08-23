class Employee {
  id: number;
  name: string;
  salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  work(): string {
    return `${this.name} đang làm việc.`;
  }

  displayInfo(): string {
    return `ID: ${this.id} | Tên: ${this.name} | Lương: ${this.salary.toLocaleString()} VND`;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  teamSize: number;

  constructor(id: number, name: string, salary: number, teamSize: number) {
    super(id, name, salary);
    this.teamSize = teamSize;
  }

  manage(): string {
    return `${this.name} đang quản lý team ${this.teamSize} người.`;
  }

  holdMeeting(): string {
    return `${this.name} đang tổ chức cuộc họp với team.`;
  }

  displayInfo(): string {
    return `${super.displayInfo()} | Vai trò: Manager | Team size: ${this.teamSize}`;
  }
}

class Developer extends Employee {
  programmingLanguages: string[];

  constructor(id: number, name: string, salary: number, languages: string[]) {
    super(id, name, salary);
    this.programmingLanguages = languages;
  }

  code(): string {
    return `${this.name} đang code với ${this.programmingLanguages.join(", ")}.`;
  }

  reviewCode(): string {
    return `${this.name} đang review code.`;
  }

  displayInfo(): string {
    return `${super.displayInfo()} | Vai trò: Developer | Languages: ${this.programmingLanguages.join(", ")}`;
  }
}

export { Employee, Manager, Developer };
