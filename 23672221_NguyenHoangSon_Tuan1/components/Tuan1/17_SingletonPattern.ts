class Logger {
  private static instance: Logger;
  private logCount: number = 0;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    this.logCount++;
    const timestamp = new Date().toLocaleString("vi-VN");
    console.log(`[${timestamp}] [LOG #${this.logCount}] ${message}`);
  }

  error(message: string): void {
    this.logCount++;
    const timestamp = new Date().toLocaleString("vi-VN");
    console.error(`[${timestamp}] [ERROR #${this.logCount}] ${message}`);
  }

  warn(message: string): void {
    this.logCount++;
    const timestamp = new Date().toLocaleString("vi-VN");
    console.warn(`[${timestamp}] [WARN #${this.logCount}] ${message}`);
  }

  info(message: string): void {
    this.logCount++;
    const timestamp = new Date().toLocaleString("vi-VN");
    console.info(`[${timestamp}] [INFO #${this.logCount}] ℹ${message}`);
  }

  getLogCount(): number {
    return this.logCount;
  }
}

export { Logger };
