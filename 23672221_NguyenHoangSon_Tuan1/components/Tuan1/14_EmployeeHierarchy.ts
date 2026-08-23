class Employee {
  constructor(public id: number, public name: string, public salary: number) {}
  work(): string { return `${this.name} đang làm việc.`; }
}

class Manager extends Employee {
  constructor(id: number, name: string, salary: number, public teamSize: number) {
    super(id, name, salary);
  }
  manage(): string { return `${this.name} quản lý team ${this.teamSize} người.`; }
}

class Developer extends Employee {
  constructor(id: number, name: string, salary: number, public languages: string[]) {
    super(id, name, salary);
  }
  code(): string { return `${this.name} code với ${this.languages.join(", ")}.`; }
}

export { Employee, Manager, Developer };
