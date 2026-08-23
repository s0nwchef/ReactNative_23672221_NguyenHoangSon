abstract class Appliance {
  brand: string;
  model: string;
  protected isOn: boolean = false;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  abstract turnOn(): string;
  abstract turnOff(): string;

  getStatus(): string {
    return this.isOn ? "Đang bật" : "Đang tắt";
  }

  displayInfo(): string {
    return `${this.brand} ${this.model} - Trạng thái: ${this.getStatus()}`;
  }
}

class Fan extends Appliance {
  private speed: number = 0;

  constructor(brand: string, model: string) {
    super(brand, model);
  }

  turnOn(): string {
    this.isOn = true;
    this.speed = 1;
    return `Quạt ${this.brand} đã bật ở mức ${this.speed}`;
  }

  turnOff(): string {
    this.isOn = false;
    this.speed = 0;
    return `Quạt ${this.brand} đã tắt`;
  }

  setSpeed(speed: number): string {
    if (!this.isOn) {
      return `Quạt đang tắt. Vui lòng bật quạt trước.`;
    }
    if (speed < 1 || speed > 3) {
      return `Tốc độ phải từ 1-3`;
    }
    this.speed = speed;
    return `Quạt ${this.brand} đã chỉnh mức ${this.speed}`;
  }

  getSpeed(): number {
    return this.speed;
  }
}

class AirConditioner extends Appliance {
  private temperature: number = 24;

  constructor(brand: string, model: string) {
    super(brand, model);
  }

  turnOn(): string {
    this.isOn = true;
    return `Điều hòa ${this.brand} đã bật ở ${this.temperature}°C`;
  }

  turnOff(): string {
    this.isOn = false;
    return `Điều hòa ${this.brand} đã tắt`;
  }

  setTemperature(temp: number): string {
    if (!this.isOn) {
      return `Điều hòa đang tắt. Vui lòng bật điều hòa trước.`;
    }
    if (temp < 16 || temp > 30) {
      return `Nhiệt độ phải từ 16-30°C`;
    }
    this.temperature = temp;
    return `Điều hòa ${this.brand} đã chỉnh ${this.temperature}°C`;
  }

  getTemperature(): number {
    return this.temperature;
  }
}

export { Appliance, Fan, AirConditioner };
