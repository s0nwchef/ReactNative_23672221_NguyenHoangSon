interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class Order {
  orderId: string;
  customerName: string;
  private items: OrderItem[] = [];

  constructor(orderId: string, customerName: string) {
    this.orderId = orderId;
    this.customerName = customerName;
  }

  addItem(item: OrderItem): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  removeItem(itemId: number): boolean {
    const index = this.items.findIndex(i => i.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  updateQuantity(itemId: number, quantity: number): boolean {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      return true;
    }
    return false;
  }

  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  calculateTax(taxRate: number = 0.1): number {
    return this.calculateTotal() * taxRate;
  }

  calculateGrandTotal(taxRate: number = 0.1): number {
    return this.calculateTotal() + this.calculateTax(taxRate);
  }

  getItemCount(): number {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  displayOrder(): void {
    console.log(`\n📦 Đơn hàng: ${this.orderId}`);
    console.log(`👤 Khách hàng: ${this.customerName}`);
    console.log("-".repeat(50));

    this.items.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      console.log(`${index + 1}. ${item.name} x${item.quantity} = ${subtotal.toLocaleString()} VND`);
    });

    console.log("-".repeat(50));
    console.log(`Tạm tính: ${this.calculateTotal().toLocaleString()} VND`);
    console.log(`Thuế (10%): ${this.calculateTax().toLocaleString()} VND`);
    console.log(`Tổng cộng: ${this.calculateGrandTotal().toLocaleString()} VND`);
  }
}

export { OrderItem, Order };
