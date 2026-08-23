class Product {
  id: number;
  name: string;
  price: number;
  category: string;

  constructor(id: number, name: string, price: number, category: string = "General") {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  displayInfo(): string {
    return `[${this.id}] ${this.name} - ${this.price.toLocaleString()} VND (${this.category})`;
  }
}

class ProductManager {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addProducts(products: Product[]): void {
    products.forEach(p => this.products.push(p));
  }

  filterByPrice(threshold: number): Product[] {
    return this.products.filter(product => product.price > threshold);
  }

  filterByPriceRange(minPrice: number, maxPrice: number): Product[] {
    return this.products.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
  }

  filterByCategory(category: string): Product[] {
    return this.products.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  sortByPriceAsc(): Product[] {
    return [...this.products].sort((a, b) => a.price - b.price);
  }

  sortByPriceDesc(): Product[] {
    return [...this.products].sort((a, b) => b.price - a.price);
  }

  displayAll(): void {
    console.log("\nDanh sách tất cả sản phẩm:");
    this.products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.displayInfo()}`);
    });
    console.log(`Tổng số sản phẩm: ${this.products.length}`);
  }

  displayFiltered(productList: Product[], title: string): void {
    console.log(`\n${title}:`);
    if (productList.length === 0) {
      console.log("  Không có sản phẩm nào thỏa mãn điều kiện.");
      return;
    }
    productList.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.displayInfo()}`);
    });
    console.log(`  Số lượng: ${productList.length}`);
  }

  getTotalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export { Product, ProductManager };
