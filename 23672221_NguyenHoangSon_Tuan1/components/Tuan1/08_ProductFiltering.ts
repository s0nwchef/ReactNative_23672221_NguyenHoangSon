class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  displayInfo(): string {
    return `${this.name} - ${this.price} VND`;
  }
}

class ProductManager {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  filterByPrice(threshold: number): Product[] {
    return this.products.filter(p => p.price > threshold);
  }

  filterByPriceRange(min: number, max: number): Product[] {
    return this.products.filter(p => p.price >= min && p.price <= max);
  }
}

export { Product, ProductManager };
