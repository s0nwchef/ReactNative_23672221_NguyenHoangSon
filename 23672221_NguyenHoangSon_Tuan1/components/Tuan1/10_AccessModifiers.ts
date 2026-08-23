class Account {
  public accountNumber: string;
  public ownerName: string;
  private balance: number;
  readonly accountType: string;

  constructor(accountNumber: string, ownerName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
    this.accountType = "Savings";
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }

  displayInfo(): string {
    return `Account: ${this.accountNumber} | Owner: ${this.ownerName} | Balance: ${this.balance}`;
  }
}

export { Account };
