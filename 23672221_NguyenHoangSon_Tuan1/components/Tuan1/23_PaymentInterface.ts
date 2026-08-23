interface Payment {
  pay(amount: number): string;
}

class CashPayment implements Payment {
  pay(amount: number): string {
    return `Thanh toán tiền mặt: ${amount.toLocaleString()} VND`;
  }
}

class CardPayment implements Payment {
  cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): string {
    const maskedCard = this.cardNumber.slice(-4).padStart(this.cardNumber.length, '*');
    return `Thanh toán thẻ ${maskedCard}: ${amount.toLocaleString()} VND`;
  }
}

class MomoPayment implements Payment {
  phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  pay(amount: number): string {
    return `Thanh toán MoMo (${this.phoneNumber}): ${amount.toLocaleString()} VND`;
  }
}

class PaymentProcessor {
  processPayment(payment: Payment, amount: number): void {
    console.log(payment.pay(amount));
  }
}

export { Payment, CashPayment, CardPayment, MomoPayment, PaymentProcessor };
