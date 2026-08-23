interface Product { name: string; price: number; }

class Order {
  private products: Product[] = [];
  
  addProduct(product: Product): void { this.products.push(product); }
  calculateTotal(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

export { Product, Order };
