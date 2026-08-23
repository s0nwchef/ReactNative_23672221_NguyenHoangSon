class User {
  private name: string;
  private email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getAge(): number {
    return this.age;
  }

  setName(newName: string): boolean {
    if (!newName || newName.trim().length < 2) {
      console.log(`Tên không hợp lệ: "${newName}". Tên phải có ít nhất 2 ký tự.`);
      return false;
    }
    this.name = newName.trim();
    return true;
  }

  setEmail(newEmail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      console.log(`Email không hợp lệ: "${newEmail}"`);
      return false;
    }
    this.email = newEmail.toLowerCase();
    return true;
  }

  setAge(newAge: number): boolean {
    if (newAge < 1 || newAge > 150) {
      console.log(`Tuổi không hợp lệ: ${newAge}. Tuổi phải từ 1 đến 150.`);
      return false;
    }
    this.age = newAge;
    return true;
  }

  displayInfo(): string {
    return `User: ${this.name} | Email: ${this.email} | Tuổi: ${this.age}`;
  }

  displaySecureInfo(): string {
    const hiddenEmail = this.email.replace(/(.{2})(.*)(@.*)/, "$1***$3");
    return `User: ${this.name} | Email: ${hiddenEmail} | Tuổi: ${this.age}`;
  }
}

export { User };
