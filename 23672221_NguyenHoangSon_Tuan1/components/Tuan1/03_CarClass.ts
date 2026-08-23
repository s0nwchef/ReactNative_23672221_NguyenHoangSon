interface CarInfo {
  brand: string;
  model: string;
  year: number;
}

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): string {
    return `Xe: ${this.brand} ${this.model} - Năm SX: ${this.year}`;
  }

  getAge(currentYear: number): number {
    return currentYear - this.year;
  }

  isOldCar(currentYear: number): boolean {
    return this.getAge(currentYear) > 5;
  }
}

export { Car, CarInfo };
