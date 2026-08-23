abstract class Appliance {
  constructor(public brand: string) {}
  abstract turnOn(): string;
}

class Fan extends Appliance {
  turnOn(): string { return `Quạt ${this.brand} đã bật.`; }
}

class AirConditioner extends Appliance {
  turnOn(): string { return `Điều hòa ${this.brand} đã bật.`; }
}

export { Appliance, Fan, AirConditioner };
