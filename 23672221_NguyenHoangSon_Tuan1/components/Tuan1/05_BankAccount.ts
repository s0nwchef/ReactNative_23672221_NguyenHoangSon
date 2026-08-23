class BankAccount {
  private balance: number;
  private accountNumber: string;
  private ownerName: string;

  constructor(accountNumber: string, ownerName: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  deposit(amount: number): string {
    if (amount <= 0) {
      return `Số tiền nạp phải lớn hơn 0. Bạn nhập: ${amount.toLocaleString()} VND`;
    }
    this.balance += amount;
    return `Nạp thành công ${amount.toLocaleString()} VND. Số dư mới: ${this.balance.toLocaleString()} VND`;
  }

  withdraw(amount: number): string {
    if (amount <= 0) {
      return `Số tiền rút phải lớn hơn 0. Bạn nhập: ${amount.toLocaleString()} VND`;
    }
    if (amount > this.balance) {
      return `Không đủ số dư! Số dư: ${this.balance.toLocaleString()} VND, Bạn muốn rút: ${amount.toLocaleString()} VND`;
    }
    this.balance -= amount;
    return `Rút thành công ${amount.toLocaleString()} VND. Số dư còn lại: ${this.balance.toLocaleString()} VND`;
  }

  getBalance(): number {
    return this.balance;
  }

  displayInfo(): string {
    return `Tài khoản: ${this.accountNumber} | Chủ TK: ${this.ownerName} | Số dư: ${this.balance.toLocaleString()} VND`;
  }
}

export { BankAccount };
