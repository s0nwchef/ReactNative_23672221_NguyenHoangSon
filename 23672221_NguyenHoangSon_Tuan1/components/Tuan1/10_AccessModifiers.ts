class Account {
  public accountNumber: string;
  public ownerName: string;
  private balance: number;
  private transactionHistory: string[] = [];
  protected bankCode: string;
  readonly accountType: string;
  private readonly interestRate: number;

  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number,
    accountType: string = "Savings"
  ) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.bankCode = "VNBANK";
    this.accountType = accountType;
    this.interestRate = 0.05;
    this.logTransaction(`Tài khoản được tạo với số dư: ${initialBalance.toLocaleString()} VND`);
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.logTransaction(`Nạp: +${amount.toLocaleString()} VND`);
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.logTransaction(`Rút: -${amount.toLocaleString()} VND`);
      return true;
    }
    this.logTransaction(`Rút thất bại: ${amount.toLocaleString()} VND`);
    return false;
  }

  getBalance(): number {
    return this.balance;
  }

  getTransactionHistory(): string[] {
    return [...this.transactionHistory];
  }

  displayInfo(): string {
    return `TK: ${this.accountNumber} | Chủ TK: ${this.ownerName} | Loại: ${this.accountType} | Số dư: ${this.balance.toLocaleString()} VND`;
  }

  private logTransaction(message: string): void {
    const timestamp = new Date().toLocaleString("vi-VN");
    this.transactionHistory.push(`[${timestamp}] ${message}`);
  }

  private calculateInterest(): number {
    return this.balance * this.interestRate;
  }

  getInterest(): number {
    return this.calculateInterest();
  }

  protected getBankCode(): string {
    return this.bankCode;
  }
}

class PremiumAccount extends Account {
  private rewardPoints: number = 0;

  constructor(accountNumber: string, ownerName: string, initialBalance: number) {
    super(accountNumber, ownerName, initialBalance, "Premium");
    this.rewardPoints = 100;
  }

  addRewardPoints(points: number): void {
    this.rewardPoints += points;
    console.log(`Đã thêm ${points} điểm thưởng. Tổng: ${this.rewardPoints} điểm`);
  }

  displayBankInfo(): string {
    return `Mã ngân hàng: ${this.bankCode}`;
  }

  displayPremiumInfo(): string {
    return `${this.displayInfo()} | Điểm thưởng: ${this.rewardPoints}`;
  }
}

export { Account, PremiumAccount };
