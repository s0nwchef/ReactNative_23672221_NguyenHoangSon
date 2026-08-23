class User {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  displayInfo(): string {
    return `User: ${this.name} | Email: ${this.email}`;
  }
}

export { User };
