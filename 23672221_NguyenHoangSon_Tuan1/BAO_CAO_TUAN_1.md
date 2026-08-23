# BÁO CÁO TUẦN 1 - LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG VỚI TYPESCRIPT

**Họ tên:** Nguyễn Hoàng Sơn  
**MSSV:** 23672221  
**Lớp:** Mobile Development  

---

## HƯỚNG DẪN SỬ DỤNG FILE WORD

Để tạo file Word hoàn chỉnh, bạn cần:

1. **Chụp màn hình kết quả chạy ứng dụng** (React Native app)
2. **Copy nội dung giải thích từ file .md này vào Word**
3. **Chèn hình ảnh chụp màn hình vào từng bài tương ứng**
4. **Định dạng lại theo yêu cầu giáo viên**

---

## BÀI 01: PERSON CLASS

### Mô tả
Tạo class `Person` với các thuộc tính `name` và `age`, có method `displayInfo()` để hiển thị thông tin.

### Code
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): string {
    return `Xin chào, tôi tên là ${this.name}, năm nay tôi ${this.age} tuổi.`;
  }
}

export { Person };
```

### Giải thích chi tiết

1. **Class declaration**: `class Person` - Khai báo một lớp tên là Person
2. **Properties**:
   - `name: string` - Thuộc tính tên, kiểu string
   - `age: number` - Thuộc tính tuổi, kiểu number
3. **Constructor**: Hàm khởi tạo nhận 2 tham số `name` và `age` để gán giá trị cho thuộc tính
4. **Method**: `displayInfo()` trả về chuỗi thông tin cá nhân
5. **Export**: `export { Person }` để sử dụng ở file khác

### Kết quả chạy
```
Xin chào, tôi tên là Nguyen Van A, năm nay tôi 25 tuổi.
```

**[CHÈN HÌNH 1: Màn hình hiển thị Bai 01]**

---

## BÀI 02: STUDENT SUBCLASS

### Mô tả
Tạo class `Student` kế thừa từ `Person`, thêm thuộc tính `grade` và override method `displayInfo()`.

### Code
```typescript
import { Person } from "./01_PersonClass";

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): string {
    const baseInfo = this.displayInfo();
    return `${baseInfo} Tôi là sinh viên với điểm số: ${this.grade}.`;
  }

  displayInfo(): string {
    return `Sinh viên: ${this.name}, Tuổi: ${this.age}, Điểm: ${this.grade}`;
  }
}

export { Student };
```

### Giải thích chi tiết

1. **Inheritance**: `extends Person` - Student kế thừa từ Person
2. **Super constructor**: `super(name, age)` - Gọi constructor của lớp cha
3. **New property**: `grade: string` - Thêm thuộc tính điểm số
4. **Method override**: `displayInfo()` được ghi đè từ lớp cha
5. **New method**: `displayAllInfo()` - Kết hợp thông tin cha và thông tin mới

### Kết quả chạy
```
Sinh viên: Tran Thi B, Tuổi: 20, Điểm: A
Xin chào, tôi tên là Tran Thi B, năm nay tôi 20 tuổi. Tôi là sinh viên với điểm số: A.
```

**[CHÈN HÌNH 2: Màn hình hiển thị Bai 02]**

---

## BÀI 03: CAR CLASS

### Mô tả
Tạo class `Car` với các thuộc tính `brand`, `model`, `year` và các method để hiển thị thông tin.

### Code
```typescript
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  showInfo(): string {
    return `Xe: ${this.brand} ${this.model} - Năm SX: ${this.year}`;
  }

  getAge(currentYear: number): number {
    return currentYear - this.year;
  }

  isOldCar(currentYear: number): boolean {
    return this.getAge(currentYear) > 5;
  }
}

export { Car };
```

### Giải thích chi tiết

1. **Properties**: `brand`, `model`, `year` mô tả thông tin xe
2. **showInfo()**: Trả về chuỗi thông tin xe
3. **getAge()**: Tính tuổi xe dựa trên năm hiện tại
4. **isOldCar()**: Kiểm tra xe có phải xe cũ (>5 năm) không

### Kết quả chạy
```
Xe: Toyota Camry - Năm SX: 2018
Tuổi xe: 8 năm
Xe cũ: Có
```

**[CHÈN HÌNH 3: Màn hình hiển thị Bai 03]**

---

## BÀI 04: RECTANGLE CLASS

### Mô tả
Tạo class `Rectangle` với các method tính diện tích, chu vi và kiểm tra hình vuông.

### Code
```typescript
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error("Chiều rộng và chiều cao phải lớn hơn 0");
    }
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

  isSquare(): boolean {
    return this.width === this.height;
  }

  displayInfo(): string {
    return `Hình chữ nhật: ${this.width} x ${this.height} | Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

export { Rectangle };
```

### Giải thích chi tiết

1. **Validation**: Constructor kiểm tra giá trị > 0
2. **area()**: Tính diện tích = width × height
3. **perimeter()**: Tính chu vi = 2 × (width + height)
4. **isSquare()**: Kiểm tra có phải hình vuông không

### Kết quả chạy
```
Hình chữ nhật: 10 x 5 | Diện tích: 50 | Chu vi: 30
Is Square: No
```

**[CHÈN HÌNH 4: Màn hình hiển thị Bai 04]**

---

## BÀI 05: BANK ACCOUNT

### Mô tả
Tạo class `BankAccount` quản lý số dư tài khoản với các method nạp tiền, rút tiền.

### Code
```typescript
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
    return `💳 Tài khoản: ${this.accountNumber} | Chủ TK: ${this.ownerName} | Số dư: ${this.balance.toLocaleString()} VND`;
  }
}

export { BankAccount };
```

### Giải thích chi tiết

1. **Encapsulation**: `private balance` - Bảo vệ dữ liệu
2. **deposit()**: Nạp tiền với validation > 0
3. **withdraw()**: Rút tiền với kiểm tra số dư đủ
4. **displayInfo()**: Hiển thị thông tin tài khoản

### Kết quả chạy
```
💳 Tài khoản: 1234567890 | Chủ TK: Nguyen Van C | Số dư: 1.000.000 VND
Nạp thành công 500.000 VND. Số dư mới: 1.500.000 VND
Rút thành công 200.000 VND. Số dư còn lại: 1.300.000 VND
```

**[CHÈN HÌNH 5: Màn hình hiển thị Bai 05]**

---

## BÀI 06: BOOK CLASS

### Mô tả
Tạo class `Book` với thông tin sách và các method kiểm tra sách mới/sách quý.

### Code
```typescript
interface BookInfo {
  title: string;
  author: string;
  year: number;
}

class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo(): string {
    return `"${this.title}" - Tác giả: ${this.author} - Năm XB: ${this.year}`;
  }

  getAge(currentYear: number): number {
    return currentYear - this.year;
  }

  isNewBook(currentYear: number): boolean {
    return this.getAge(currentYear) < 2;
  }

  isRareBook(currentYear: number): boolean {
    return this.getAge(currentYear) > 20;
  }
}

export { Book, BookInfo };
```

### Giải thích chi tiết

1. **Interface**: `BookInfo` định nghĩa cấu trúc dữ liệu sách
2. **getAge()**: Tính tuổi sách
3. **isNewBook()**: Kiểm tra sách mới (< 2 năm)
4. **isRareBook()**: Kiểm tra sách quý (> 20 năm)

### Kết quả chạy
```
"Lap trinh TypeScript" - Tác giả: Tac Gia A - Năm XB: 2023
Age: 3 years
```

**[CHÈN HÌNH 6: Màn hình hiển thị Bai 06]**

---

## BÀI 07: USER ENCAPSULATION

### Mô tả
Tạo class `User` với encapsulation, validation dữ liệu đầu vào.

### Code
```typescript
class User {
  private name: string;
  private email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getAge(): number {
    return this.age;
  }

  setName(newName: string): boolean {
    if (!newName || newName.trim().length < 2) {
      console.log(`Tên không hợp lệ: "${newName}". Tên phải có ít nhất 2 ký tự.`);
      return false;
    }
    this.name = newName.trim();
    return true;
  }

  setEmail(newEmail: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      console.log(`⌛ Email không hợp lệ: "${newEmail}"`);
      return false;
    }
    this.email = newEmail.toLowerCase();
    return true;
  }

  setAge(newAge: number): boolean {
    if (newAge < 1 || newAge > 150) {
      console.log(`⌛ Tuổi không hợp lệ: ${newAge}. Tuổi phải từ 1 đến 150.`);
      return false;
    }
    this.age = newAge;
    return true;
  }

  displayInfo(): string {
    return `👤 User: ${this.name} | Email: ${this.email} | Tuổi: ${this.age}`;
  }
}

export { User };
```

### Giải thích chi tiết

1. **Private properties**: Bảo vệ dữ liệu khỏi truy cập trực tiếp
2. **Getter methods**: `getName()`, `getEmail()`, `getAge()` - Lấy giá trị
3. **Setter methods**: `setName()`, `setEmail()`, `setAge()` - Gán giá trị với validation
4. **Email validation**: Sử dụng regex để kiểm tra định dạng email
5. **Age validation**: Tuổi phải từ 1-150

### Kết quả chạy
```
👤 User: Le Van D | Email: levand@example.com | Tuổi: 30
```

**[CHÈN HÌNH 7: Màn hình hiển thị Bai 07]**

---

## BÀI 08: PRODUCT FILTERING

### Mô tả
Tạo class `Product` và `ProductManager` để quản lý và lọc sản phẩm.

### Code
```typescript
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
}

export { Product, ProductManager };
```

### Giải thích chi tiết

1. **Product class**: Đại diện cho một sản phẩm
2. **ProductManager**: Quản lý danh sách sản phẩm
3. **filterByPrice()**: Lọc sản phẩm trên giá threshold
4. **filterByPriceRange()**: Lọc theo khoảng giá
5. **filterByCategory()**: Lọc theo danh mục
6. **sort methods**: Sắp xếp theo giá tăng/giảm

### Kết quả chạy
```
Products (5-20M VND):
[1] Laptop - 15.000.000 VND (Electronics)
[2] Phone - 8.000.000 VND (Electronics)
```

**[CHÈN HÌNH 8: Màn hình hiển thị Bai 08]**

---

## BÀI 09: ANIMAL INTERFACE

### Mô tả
Tạo interface `IAnimal` và class `BasicAnimal` implement nhiều interface.

### Code
```typescript
interface IAnimal {
  name: string;
  species: string;
  sound(): string;
  move(): string;
}

interface IFeedable {
  eat(food: string): string;
}

interface ISleepable {
  sleep(hours: number): string;
}

class BasicAnimal implements IAnimal, IFeedable, ISleepable {
  name: string;
  species: string;
  age: number;

  constructor(name: string, species: string, age: number) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

  sound(): string {
    return `${this.name} phát ra tiếng kêu.`;
  }

  move(): string {
    return `${this.name} đang di chuyển.`;
  }

  eat(food: string): string {
    return `${this.name} đang ăn ${food}.`;
  }

  sleep(hours: number): string {
    return `${this.name} đang ngủ trong ${hours} giờ.`;
  }

  displayInfo(): string {
    return `${this.name} (${this.species}) - ${this.age} tuổi`;
  }
}

export { IAnimal, IFeedable, ISleepable, BasicAnimal };
```

### Giải thích chi tiết

1. **Interface**: Định nghĩa hợp đồng cho class
2. **Multiple interfaces**: Class có thể implement nhiều interface
3. **IAnimal**: Interface cơ bản cho động vật
4. **IFeedable**: Interface cho việc ăn
5. **ISleepable**: Interface cho việc ngủ

### Kết quả chạy
```
Animal 1 (Unknown) - 5 tuổi
Sound: Animal 1 phát ra tiếng kêu.
```

**[CHÈN HÌNH 9: Màn hình hiển thị Bai 09]**

---

## BÀI 10: ACCESS MODIFIERS

### Mô tả
Tạo class `Account` với các access modifier khác nhau: public, private, protected, readonly.

### Code
```typescript
class Account {
  public accountNumber: string;
  public ownerName: string;
  private balance: number;
  private transactionHistory: string[] = [];
  protected bankCode: string;
  readonly accountType: string;

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
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  displayInfo(): string {
    return `TK: ${this.accountNumber} | Chủ TK: ${this.ownerName} | Loại: ${this.accountType} | Số dư: ${this.balance.toLocaleString()} VND`;
  }
}

class PremiumAccount extends Account {
  private rewardPoints: number = 0;

  constructor(accountNumber: string, ownerName: string, initialBalance: number) {
    super(accountNumber, ownerName, initialBalance, "Premium");
    this.rewardPoints = 100;
  }

  displayPremiumInfo(): string {
    return `${this.displayInfo()} | Điểm thưởng: ${this.rewardPoints}`;
  }
}

export { Account, PremiumAccount };
```

### Giải thích chi tiết

1. **public**: Truy cập từ mọi nơi
2. **private**: Chỉ truy cập từ trong class
3. **protected**: Truy cập từ class và subclass
4. **readonly**: Chỉ đọc, không thể gán lại
5. **PremiumAccount**: Kế thừa từ Account

### Kết quả chạy
```
TK: 0987654321 | Chủ TK: Nguyen Van E | Loại: Savings | Số dư: 2.000.000 VND
TK: 1122334455 | Chủ TK: Tran Van F | Loại: Premium | Số dư: 5.000.000 VND | Điểm thưởng: 100
```

**[CHÈN HÌNH 10: Màn hình hiển thị Bai 10]**

---

## BÀI 11: INHERITANCE ANIMAL

### Mô tả
Tạo class `Animal` làm base class, `Dog` và `Cat` kế thừa và override method.

### Code
```typescript
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sound(): string {
    return `${this.name} phát ra tiếng kêu.`;
  }

  displayInfo(): string {
    return `${this.name} - ${this.age} tuổi`;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  bark(): string {
    return `${this.name} sủa: Gâu gâu gâu!`;
  }

  sound(): string {
    return this.bark();
  }

  displayInfo(): string {
    return `${super.displayInfo()} - Giống: ${this.breed}`;
  }
}

class Cat extends Animal {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  meow(): string {
    return `${this.name} kêu: Meo meo meo!`;
  }

  sound(): string {
    return this.meow();
  }

  displayInfo(): string {
    return `${super.displayInfo()} - Màu: ${this.color}`;
  }
}

export { Animal, Dog, Cat };
```

### Giải thích chi tiết

1. **Base class**: `Animal` là class cơ sở
2. **Inheritance**: `Dog` và `Cat` kế thừa từ Animal
3. **super**: Gọi method của class cha
4. **Method overriding**: Ghi đè method `sound()` và `displayInfo()`

### Kết quả chạy
```
Rex - 3 tuổi - Giống: Bulldog
Rex sủa: Gâu gâu gâu!
Mimi - 2 tuổi - Màu: White
Mimi kêu: Meo meo meo!
```

**[CHÈN HÌNH 11: Màn hình hiển thị Bai 11]**

---

## BÀI 12: MULTIPLE INTERFACES

### Mô tả
Tạo các interface `Flyable` và `Swimmable`, class `Duck` implement cả hai.

### Code
```typescript
interface Flyable {
  fly(): string;
  getMaxAltitude(): number;
}

interface Swimmable {
  swim(): string;
  getMaxDepth(): number;
}

class Bird implements Flyable {
  name: string;
  maxAltitude: number;

  constructor(name: string, maxAltitude: number) {
    this.name = name;
    this.maxAltitude = maxAltitude;
  }

  fly(): string {
    return `${this.name} đang bay ở độ cao ${this.maxAltitude}m`;
  }

  getMaxAltitude(): number {
    return this.maxAltitude;
  }

  displayInfo(): string {
    return `${this.name} - Bay tối đa: ${this.maxAltitude}m`;
  }
}

class Fish implements Swimmable {
  name: string;
  maxDepth: number;

  constructor(name: string, maxDepth: number) {
    this.name = name;
    this.maxDepth = maxDepth;
  }

  swim(): string {
    return `${this.name} đang bơi ở độ sâu ${this.maxDepth}m`;
  }

  getMaxDepth(): number {
    return this.maxDepth;
  }

  displayInfo(): string {
    return `${this.name} - Lặn tối đa: ${this.maxDepth}m`;
  }
}

class Duck implements Flyable, Swimmable {
  name: string;
  maxAltitude: number;
  maxDepth: number;

  constructor(name: string, maxAltitude: number, maxDepth: number) {
    this.name = name;
    this.maxAltitude = maxAltitude;
    this.maxDepth = maxDepth;
  }

  fly(): string {
    return `${this.name} đang bay ở độ cao ${this.maxAltitude}m`;
  }

  swim(): string {
    return `${this.name} đang bơi ở độ sâu ${this.maxDepth}m`;
  }

  getMaxAltitude(): number {
    return this.maxAltitude;
  }

  getMaxDepth(): number {
    return this.maxDepth;
  }

  displayInfo(): string {
    return `${this.name} - Bay: ${this.maxAltitude}m | Lặn: ${this.maxDepth}m`;
  }
}

export { Flyable, Swimmable, Bird, Fish, Duck };
```

### Giải thích chi tiết

1. **Flyable**: Interface cho vật bay được
2. **Swimmable**: Interface cho vật bơi được
3. **Bird**: Class implement Flyable
4. **Fish**: Class implement Swimmable
5. **Duck**: Class implement cả hai interface (multiple interfaces)

### Kết quả chạy
```
Eagle - Bay tối đa: 500m
Shark - Lặn tối đa: 200m
Donald - Bay: 100m | Lặn: 5m
```

**[CHÈN HÌNH 12: Màn hình hiển thị Bai 12]**

---

## BÀI 13: ABSTRACT SHAPE

### Mô tả
Tạo abstract class `Shape` và các class con `Square`, `Circle`, `Rectangle`.

### Code
```typescript
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  displayInfo(): string {
    return `Hình học - Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

class Square extends Shape {
  side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }

  perimeter(): number {
    return 4 * this.side;
  }

  displayInfo(): string {
    return `Hình vuông (cạnh: ${this.side}) | Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  displayInfo(): string {
    return `Hình tròn (bán kính: ${this.radius}) | Diện tích: ${this.area().toFixed(2)} | Chu vi: ${this.perimeter().toFixed(2)}`;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }

  displayInfo(): string {
    return `Hình chữ nhật (${this.width}x${this.height}) | Diện tích: ${this.area()} | Chu vi: ${this.perimeter()}`;
  }
}

export { Shape, Square, Circle, Rectangle };
```

### Giải thích chi tiết

1. **abstract class**: Không thể khởi tạo trực tiếp
2. **abstract methods**: `area()` và `perimeter()` phải được implement bởi subclass
3. **Square**: Hình vuông
4. **Circle**: Hình tròn
5. **Rectangle**: Hình chữ nhật

### Kết quả chạy
```
Hình vuông (cạnh: 5) | Diện tích: 25 | Chu vi: 20
Hình tròn (bán kính: 3) | Diện tích: 28.27 | Chu vi: 18.85
Hình chữ nhật (4x6) | Diện tích: 24 | Chu vi: 20
```

**[CHÈN HÌNH 13: Màn hình hiển thị Bai 13]**

---

## BÀI 14: EMPLOYEE HIERARCHY

### Mô tả
Tạo hệ thống class Employee với Manager và Developer kế thừa.

### Code
```typescript
class Employee {
  id: number;
  name: string;
  salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  work(): string {
    return `${this.name} đang làm việc.`;
  }

  displayInfo(): string {
    return `ID: ${this.id} | Tên: ${this.name} | Lương: ${this.salary.toLocaleString()} VND`;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  teamSize: number;

  constructor(id: number, name: string, salary: number, teamSize: number) {
    super(id, name, salary);
    this.teamSize = teamSize;
  }

  manage(): string {
    return `${this.name} đang quản lý team ${this.teamSize} người.`;
  }

  displayInfo(): string {
    return `${super.displayInfo()} | Vai trò: Manager | Team size: ${this.teamSize}`;
  }
}

class Developer extends Employee {
  programmingLanguages: string[];

  constructor(id: number, name: string, salary: number, languages: string[]) {
    super(id, name, salary);
    this.programmingLanguages = languages;
  }

  code(): string {
    return `${this.name} đang code với ${this.programmingLanguages.join(", ")}.`;
  }

  displayInfo(): string {
    return `${super.displayInfo()} | Vai trò: Developer | Languages: ${this.programmingLanguages.join(", ")}`;
  }
}

export { Employee, Manager, Developer };
```

### Giải thích chi tiết

1. **Employee**: Class cơ sở cho nhân viên
2. **Manager**: Kế thừa Employee, thêm teamSize
3. **Developer**: Kế thừa Employee, thêm programmingLanguages
4. **Polymorphism**: Mỗi subclass có displayInfo() riêng

### Kết quả chạy
```
ID: 1 | Tên: Pham Van G | Lương: 50.000.000 VND | Vai trò: Manager | Team size: 10
Pham Van G đang quản lý team 10 người.
ID: 2 | Tên: Hoang Van H | Lương: 30.000.000 VND | Vai trò: Developer | Languages: TypeScript, React
Hoang Van H đang code với TypeScript, React.
```

**[CHÈN HÌNH 14: Màn hình hiển thị Bai 14]**

---

## BÀI 15: LIBRARY CLASS

### Mô tả
Tạo class `Library` quản lý sách và người dùng với aggregation.

### Code
```typescript
import { Book } from "./06_BookClass";
import { User } from "./07_UserEncapsulation";

class Library {
  name: string;
  private books: Book[] = [];
  private users: User[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  addBooks(books: Book[]): void {
    books.forEach(book => this.books.push(book));
  }

  removeBook(title: string): boolean {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }

  findBookByTitle(title: string): Book | undefined {
    return this.books.find(book => book.title.includes(title));
  }

  findBooksByAuthor(author: string): Book[] {
    return this.books.filter(book => book.author.includes(author));
  }

  registerUser(user: User): void {
    this.users.push(user);
  }

  getBookCount(): number {
    return this.books.length;
  }

  getUserCount(): number {
    return this.users.length;
  }
}

export { Library };
```

### Giải thích chi tiết

1. **Aggregation**: Library "has-a" Book và User
2. **Collection management**: Quản lý mảng books và users
3. **CRUD operations**: Add, remove, find books
4. **Composition**: Library chứa các Book và User objects

### Kết quả chạy
```
Library: Thu Vien Quan 1
Books: 2
```

**[CHÈN HÌNH 15: Màn hình hiển thị Bai 15]**

---

## BÀI 16: GENERIC BOX

### Mô tả
Tạo generic class `Box<T>` để chứa bất kỳ kiểu dữ liệu nào.

### Code
```typescript
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }

  setContent(content: T): void {
    this.content = content;
  }

  displayInfo(): string {
    return `Box chứa: ${JSON.stringify(this.content)}`;
  }
}

export { Box };
```

### Giải thích chi tiết

1. **Generic Type**: `<T>` là type parameter
2. **Type safety**: Box<string> chỉ chứa string
3. **Reusability**: Dùng được với mọi kiểu dữ liệu
4. **JSON.stringify**: Hiển thị nội dung

### Kết quả chạy
```
Box chứa: "Hello TypeScript!"
Box chứa: 42
```

**[CHÈN HÌNH 16: Màn hình hiển thị Bai 16]**

---

## BÀI 17: SINGLETON PATTERN

### Mô tả
Tạo class `Logger` với Singleton pattern - chỉ có 1 instance duy nhất.

### Code
```typescript
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

  getLogCount(): number {
    return this.logCount;
  }
}

export { Logger };
```

### Giải thích chi tiết

1. **Private constructor**: Ngăn khởi tạo từ bên ngoài
2. **Static instance**: Lưu instance duy nhất
3. **getInstance()**: Trả về instance, tạo nếu chưa có
4. **Singleton guarantee**: Luôn trả về cùng 1 object

### Kết quả chạy
```
Logger1 === Logger2: True
```

**[CHÈN HÌNH 17: Màn hình hiển thị Bai 17]**

---

## BÀI 18: STATIC UTILITY

### Mô tả
Tạo class `MathUtil` với static methods - không cần tạo instance để dùng.

### Code
```typescript
class MathUtil {
  private constructor() {}

  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number | null {
    if (b === 0) {
      console.log("Không thể chia cho 0");
      return null;
    }
    return a / b;
  }

  static power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  static squareRoot(num: number): number | null {
    if (num < 0) {
      console.log("Không thể tính căn bậc 2 của số âm");
      return null;
    }
    return Math.sqrt(num);
  }
}

export { MathUtil };
```

### Giải thích chi tiết

1. **Private constructor**: Ngăn khởi tạo instance
2. **Static methods**: Gọi trực tiếp qua class name
3. **Utility pattern**: Group các functions liên quan
4. **No state**: Không lưu trữ data

### Kết quả chạy
```
10 + 20 = 30
5 * 4 = 20
```

**[CHÈN HÌNH 18: Màn hình hiển thị Bai 18]**

---

## BÀI 19: POLYMORPHISM OVERRIDING

### Mô tả
Tạo class `Bird` và `Snake` kế thừa từ `Animal` với method overriding.

### Code
```typescript
import { Animal, Dog, Cat } from "./11_InheritanceAnimal";

class Bird extends Animal {
  species: string;

  constructor(name: string, age: number, species: string) {
    super(name, age);
    this.species = species;
  }

  sound(): string {
    return `${this.name} hót: Chíp chíp!`;
  }

  fly(): string {
    return `${this.name} đang bay.`;
  }
}

class Snake extends Animal {
  length: number;

  constructor(name: string, age: number, length: number) {
    super(name, age);
    this.length = length;
  }

  sound(): string {
    return `${this.name} rít: Ssssss!`;
  }

  crawl(): string {
    return `${this.name} đang bò.`;
  }
}

export { Bird, Snake };
```

### Giải thích chi tiết

1. **Polymorphism**: Mỗi animal có sound() khác nhau
2. **Method overriding**: Ghi đè method từ class cha
3. **Unique methods**: Bird có fly(), Snake có crawl()
4. **Runtime binding**: Method được gọi phụ thuộc vào actual type

### Kết quả chạy
```
Tweety hót: Chíp chíp!
Tweety đang bay.
Python rít: Ssssss!
Python đang bò.
```

**[CHÈN HÌNH 19: Màn hình hiển thị Bai 19]**

---

## BÀI 20: VEHICLE INTERFACE

### Mô tả
Tạo interface `Vehicle` và các class `Car`, `Bike` implement interface.

### Code
```typescript
interface Vehicle {
  brand: string;
  model: string;
  year: number;
  start(): string;
  stop(): string;
  getInfo(): string;
}

class Car implements Vehicle {
  brand: string;
  model: string;
  year: number;
  private isRunning: boolean = false;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start(): string {
    this.isRunning = true;
    return `${this.brand} ${this.model} đã khởi động.`;
  }

  stop(): string {
    this.isRunning = false;
    return `${this.brand} ${this.model} đã dừng.`;
  }

  getInfo(): string {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }

  honk(): string {
    return `Bíp bíp!`;
  }
}

class Bike implements Vehicle {
  brand: string;
  model: string;
  year: number;
  private isRunning: boolean = false;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start(): string {
    this.isRunning = true;
    return `🚴 ${this.brand} ${this.model} đã sẵn sàng.`;
  }

  stop(): string {
    this.isRunning = false;
    return `🚴 ${this.brand} ${this.model} đã dừng lại.`;
  }

  getInfo(): string {
    return `🚴 Bike: ${this.brand} ${this.model} (${this.year})`;
  }

  ring(): string {
    return `🚴 Ring ring!`;
  }
}

export { Vehicle, Car, Bike };
```

### Giải thích chi tiết

1. **Interface**: Định nghĩa contract cho Vehicle
2. **Implementation**: Car và Bike implement Vehicle
3. **Contract enforcement**: Phải implement tất cả methods
4. **Additional methods**: Mỗi class có thể có methods riêng

### Kết quả chạy
```
Car: VinFast VF8 (2024)
VinFast VF8 đã khởi động.
🚴 Bike: Giant Escape 3 (2023)
🚴 Giant Escape 3 đã sẵn sàng.
```

**[CHÈN HÌNH 20: Màn hình hiển thị Bai 20]**

---

## BÀI 21: GENERIC REPOSITORY

### Mô tả
Tạo generic class `Repository<T>` để quản lý entities.

### Code
```typescript
interface IEntity {
  id: number;
}

class Repository<T extends IEntity> {
  private items: T[] = [];
  private nextId: number = 1;

  add(item: Omit<T, 'id'> & { id?: number }): T {
    const newItem = { ...item, id: this.nextId++ } as T;
    this.items.push(newItem);
    return newItem;
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  update(id: number, updates: Partial<T>): T | undefined {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updates };
      return this.items[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  count(): number {
    return this.items.length;
  }
}

export { IEntity, Repository };
```

### Giải thích chi tiết

1. **Generic constraint**: `<T extends IEntity>` - T phải có id
2. **CRUD operations**: Create, Read, Update, Delete
3. **Auto-increment ID**: Tự động tạo id mới
4. **Type safety**: Kiểm tra type tại compile time

### Kết quả chạy
```
Total users: 2
User 1: User 1 (user1@test.com)
User 2: User 2 (user2@test.com)
```

**[CHÈN HÌNH 21: Màn hình hiển thị Bai 21]**

---

## BÀI 22: STACK DATA STRUCTURE

### Mô tả
Tạo generic class `Stack<T>` với các operations: push, pop, peek.

### Code
```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return [...this.items];
  }
}

export { Stack };
```

### Giải thích chi tiết

1. **LIFO**: Last In First Out - Vào sau ra trước
2. **push()**: Thêm phần tử vào stack
3. **pop()**: Lấy và xóa phần tử trên cùng
4. **peek()**: Xem phần tử trên cùng không xóa
5. **Generic**: Dùng được với mọi kiểu dữ liệu

### Kết quả chạy
```
Size: 3
Top: 30
```

**[CHÈN HÌNH 22: Màn hình hiển thị Bai 22]**

---

## BÀI 23: PAYMENT INTERFACE

### Mô tả
Tạo interface `Payment` và các class implement: CashPayment, CardPayment, MomoPayment.

### Code
```typescript
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

export { Payment, CashPayment, CardPayment, MomoPayment };
```

### Giải thích chi tiết

1. **Interface**: Payment định nghĩa method pay()
2. **CashPayment**: Thanh toán tiền mặt
3. **CardPayment**: Thanh toán thẻ với mask số thẻ
4. **MomoPayment**: Thanh toán ví điện tử MoMo
5. **Polymorphism**: Mỗi class có cách thanh toán khác nhau

### Kết quả chạy
```
Thanh toán tiền mặt: 100.000 VND
Thanh toán thẻ ******3456: 50.000 VND
Thanh toán MoMo (0901234567): 75.000 VND
```

**[CHÈN HÌNH 23: Màn hình hiển thị Bai 23]**

---

## BÀI 24: ABSTRACT APPLIANCE

### Mô tả
Tạo abstract class `Appliance` và các class con `Fan`, `AirConditioner`.

### Code
```typescript
abstract class Appliance {
  brand: string;
  model: string;
  protected isOn: boolean = false;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  abstract turnOn(): string;
  abstract turnOff(): string;

  getStatus(): string {
    return this.isOn ? "Đang bật" : "Đang tắt";
  }

  displayInfo(): string {
    return `${this.brand} ${this.model} - Trạng thái: ${this.getStatus()}`;
  }
}

class Fan extends Appliance {
  private speed: number = 0;

  constructor(brand: string, model: string) {
    super(brand, model);
  }

  turnOn(): string {
    this.isOn = true;
    this.speed = 1;
    return `Quạt ${this.brand} đã bật ở mức ${this.speed}`;
  }

  turnOff(): string {
    this.isOn = false;
    this.speed = 0;
    return `Quạt ${this.brand} đã tắt`;
  }

  setSpeed(speed: number): string {
    if (!this.isOn) {
      return `Quạt đang tắt. Vui lòng bật quạt trước.`;
    }
    if (speed < 1 || speed > 3) {
      return `Tốc độ phải từ 1-3`;
    }
    this.speed = speed;
    return `Quạt ${this.brand} đã chỉnh mức ${this.speed}`;
  }
}

class AirConditioner extends Appliance {
  private temperature: number = 24;

  constructor(brand: string, model: string) {
    super(brand, model);
  }

  turnOn(): string {
    this.isOn = true;
    return `❄️ Điều hòa ${this.brand} đã bật ở ${this.temperature}°C`;
  }

  turnOff(): string {
    this.isOn = false;
    return `❄️ Điều hòa ${this.brand} đã tắt`;
  }

  setTemperature(temp: number): string {
    if (!this.isOn) {
      return `⚡ Điều hòa đang tắt. Vui lòng bật điều hòa trước.`;
    }
    if (temp < 16 || temp > 30) {
      return `⚡ Nhiệt độ phải từ 16-30°C`;
    }
    this.temperature = temp;
    return `❄️ Điều hòa ${this.brand} đã chỉnh ${this.temperature}°C`;
  }
}

export { Appliance, Fan, AirConditioner };
```

### Giải thích chi tiết

1. **Abstract class**: Không thể khởi tạo trực tiếp
2. **Abstract methods**: turnOn() và turnOff() phải được implement
3. **Fan**: Quạt với 3 mức tốc độ
4. **AirConditioner**: Điều hòa với nhiệt độ 16-30°C
5. **State management**: Quản lý trạng thái on/off

### Kết quả chạy
```
Quạt Samsung đã bật ở mức 1
❄️ Điều hòa Daikin đã bật ở 24°C
```

**[CHÈN HÌNH 24: Màn hình hiển thị Bai 24]**

---

## BÀI 25: STATIC METHOD

### Mô tả
Tạo class `Shape` với static methods tạo hình học.

### Code
```typescript
class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  static describe(): string {
    return "Shape là một hình học cơ bản với diện tích và chu vi.";
  }

  static compareArea(shape1: { area: number }, shape2: { area: number }): string {
    if (shape1.area > shape2.area) {
      return "Hình 1 có diện tích lớn hơn hình 2";
    } else if (shape1.area < shape2.area) {
      return "Hình 2 có diện tích lớn hơn hình 1";
    }
    return "Cả hai hình có diện tích bằng nhau";
  }

  static createCircle(radius: number): { name: string; radius: number; area: number } {
    return {
      name: "Circle",
      radius: radius,
      area: Math.PI * radius * radius
    };
  }

  static createRectangle(width: number, height: number): { name: string; width: number; height: number; area: number } {
    return {
      name: "Rectangle",
      width: width,
      height: height,
      area: width * height
    };
  }

  displayInfo(): string {
    return `Hình: ${this.name}`;
  }
}

export { Shape };
```

### Giải thích chi tiết

1. **Static methods**: Gọi trực tiếp qua class name
2. **Factory methods**: createCircle(), createRectangle()
3. **Comparison**: compareArea() so sánh diện tích
4. **Object creation**: Tạo object mà không cần new

### Kết quả chạy
```
Circle area: 78.54
Rectangle area: 24
Hình 1 có diện tích lớn hơn hình 2
```

**[CHÈN HÌNH 25: Màn hình hiển thị Bai 25]**

---

## BÀI 26: ORDER CALCULATION

### Mô tả
Tạo class `Order` quản lý đơn hàng và tính tổng tiền.

### Code
```typescript
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
}

export { OrderItem, Order };
```

### Giải thích chi tiết

1. **OrderItem**: Interface cho item trong đơn hàng
2. **addItem()**: Thêm item, merge nếu đã tồn tại
3. **calculateTotal()**: Tính tổng tiền hàng
4. **calculateTax()**: Tính thuế (default 10%)
5. **calculateGrandTotal()**: Tổng tiền + thuế

### Kết quả chạy
```
Order ID: ORD001
Customer: Nguyen Van I
Total: 350.000 VND
```

**[CHÈN HÌNH 26: Màn hình hiển thị Bai 26]**

---

## BÀI 27: TEACHER SUBCLASS

### Mô tả
Tạo class `Teacher` kế thừa từ `Person`.

### Code
```typescript
import { Person } from "./01_PersonClass";

class Teacher extends Person {
  subject: string;
  private experience: number;

  constructor(name: string, age: number, subject: string, experience: number = 0) {
    super(name, age);
    this.subject = subject;
    this.experience = experience;
  }

  introduce(): string {
    return `Xin chào, tôi là ${this.name}, giáo viên môn ${this.subject} với ${this.experience} năm kinh nghiệm.`;
  }

  teach(): string {
    return `📚 ${this.name} đang dạy môn ${this.subject}.`;
  }

  getExperience(): number {
    return this.experience;
  }

  setExperience(years: number): void {
    if (years >= 0) {
      this.experience = years;
    }
  }

  displayInfo(): string {
    return `Giáo viên: ${this.name} | Tuổi: ${this.age} | Môn: ${this.subject} | Kinh nghiệm: ${this.experience} năm`;
  }
}

export { Teacher };
```

### Giải thích chi tiết

1. **Inheritance**: Kế thừa từ Person
2. **New properties**: subject, experience
3. **Encapsulation**: experience là private
4. **Method override**: displayInfo() ghi đè từ Person
5. **New methods**: teach(), introduce()

### Kết quả chạy
```
Giáo viên: Ta Van J | Tuổi: 40 | Môn: Math | Kinh nghiệm: 15 năm
📚 Ta Van J đang dạy môn Math.
```

**[CHÈN HÌNH 27: Màn hình hiển thị Bai 27]**

---

## BÀI 28: PROTECTED ACCESS

### Mô tả
Tạo class `AnimalBase` với protected members và subclass truy cập.

### Code
```typescript
class AnimalBase {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected makeSound(): string {
    return "Động vật phát ra tiếng kêu";
  }

  public displaySound(): string {
    return `${this.name} says: ${this.makeSound()}`;
  }
}

class DogProtected extends AnimalBase {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  protected makeSound(): string {
    return "Gâu gâu gâu!";
  }

  public fetch(): string {
    return `${this.name} đang nhặt bóng`;
  }

  public displayInfo(): string {
    return `${this.name} - ${this.age} tuổi - Giống: ${this.breed}`;
  }
}

class CatProtected extends AnimalBase {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  protected makeSound(): string {
    return "Meo meo meo!";
  }

  public climb(): string {
    return `${this.name} đang leo cây`;
  }

  public displayInfo(): string {
    return `${this.name} - ${this.age} tuổi - Màu: ${this.color}`;
  }
}

export { AnimalBase, DogProtected, CatProtected };
```

### Giải thích chi tiết

1. **Protected members**: Truy cập từ subclass
2. **Protected method**: makeSound() chỉ class con gọi được
3. **DogProtected**: Kế thừa và override makeSound()
4. **CatProtected**: Tương tự với Cat
5. **Access control**: Kiểm soát truy cập với protected

### Kết quả chạy
```
Buddy - 4 tuổi - Giống: Golden Retriever
Buddy says: Gâu gâu gâu!
Kitty - 3 tuổi - Màu: Black
Kitty says: Meo meo meo!
```

**[CHÈN HÌNH 28: Màn hình hiển thị Bai 28]**

---

## BÀI 29: MOVABLE INTERFACE

### Mô tả
Tạo interface `Movable` và các class implement: CarMovable, RobotMovable, DroneMovable.

### Code
```typescript
interface Movable {
  move(): string;
  stop(): string;
  getPosition(): { x: number; y: number };
}

interface SpeedControllable {
  getSpeed(): number;
  setSpeed(speed: number): void;
}

class CarMovable implements Movable, SpeedControllable {
  brand: string;
  private position: { x: number; y: number } = { x: 0, y: 0 };
  private speed: number = 0;

  constructor(brand: string) {
    this.brand = brand;
  }

  move(): string {
    this.speed = 60;
    this.position.x += this.speed;
    return `${this.brand} đang di chuyển với tốc độ ${this.speed} km/h`;
  }

  stop(): string {
    this.speed = 0;
    return `${this.brand} đã dừng lại`;
  }

  getPosition(): { x: number; y: number } {
    return { ...this.position };
  }

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(speed: number): void {
    this.speed = speed;
  }
}

class RobotMovable implements Movable {
  name: string;
  private position: { x: number; y: number } = { x: 0, y: 0 };
  private isMoving: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  move(): string {
    this.isMoving = true;
    this.position.x += 10;
    this.position.y += 10;
    return `Robot ${this.name} đang di chuyển đến (${this.position.x}, ${this.position.y})`;
  }

  stop(): string {
    this.isMoving = false;
    return `Robot ${this.name} đã dừng lại tại (${this.position.x}, ${this.position.y})`;
  }

  getPosition(): { x: number; y: number } {
    return { ...this.position };
  }
}

class DroneMovable implements Movable {
  model: string;
  private position: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };

  constructor(model: string) {
    this.model = model;
  }

  move(): string {
    this.position.z += 50;
    return `Drone ${this.model} đang bay ở độ cao ${this.position.z}m`;
  }

  stop(): string {
    this.position.z = 0;
    return `Drone ${this.model} đã hạ cánh`;
  }

  getPosition(): { x: number; y: number } {
    return { x: this.position.x, y: this.position.y };
  }
}

export { Movable, SpeedControllable, CarMovable, RobotMovable, DroneMovable };
```

### Giải thích chi tiết

1. **Movable interface**: Định nghĩa hành vi di chuyển
2. **SpeedControllable**: Interface điều khiển tốc độ
3. **CarMovable**: Xe hơi implement cả hai interface
4. **RobotMovable**: Robot di chuyển 2D
5. **DroneMovable**: Drone bay 3D (có độ cao z)

### Kết quả chạy
```
Tesla đang di chuyển với tốc độ 60 km/h
Robot R2D2 đang di chuyển đến (10, 10)
Drone DJI Mavic đang bay ở độ cao 50m
```

**[CHÈN HÌNH 29: Màn hình hiển thị Bai 29]**

---

## BÀI 30: SCHOOL AGGREGATION

### Mô tả
Tạo class `School` với aggregation - chứa danh sách Students và Teachers.

### Code
```typescript
import { Student } from "./02_StudentSubclass";
import { Teacher } from "./27_TeacherSubclass";

class School {
  name: string;
  address: string;
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  removeStudent(name: string): boolean {
    const index = this.students.findIndex(s => s.name === name);
    if (index !== -1) {
      this.students.splice(index, 1);
      return true;
    }
    return false;
  }

  removeTeacher(name: string): boolean {
    const index = this.teachers.findIndex(t => t.name === name);
    if (index !== -1) {
      this.teachers.splice(index, 1);
      return true;
    }
    return false;
  }

  getStudentCount(): number {
    return this.students.length;
  }

  getTeacherCount(): number {
    return this.teachers.length;
  }

  displayInfo(): void {
    console.log("\n" + "=".repeat(60));
    console.log(`TRƯỜNG: ${this.name}`);
    console.log(`Địa chỉ: ${this.address}`);
    console.log("=".repeat(60));

    console.log(`\nDanh sách giáo viên (${this.teachers.length}):`);
    this.teachers.forEach((teacher, index) => {
      console.log(`  ${index + 1}. ${teacher.displayInfo()}`);
    });

    console.log(`\nDanh sách học sinh (${this.students.length}):`);
    this.students.forEach((student, index) => {
      console.log(`  ${index + 1}. ${student.displayInfo()}`);
    });

    console.log("\n" + "-".repeat(60));
    console.log(`Tổng số giáo viên: ${this.getTeacherCount()}`);
    console.log(`Tổng số học sinh: ${this.getStudentCount()}`);
    console.log("-".repeat(60));
  }
}

export { School };
```

### Giải thích chi tiết

1. **Aggregation**: School "has-a" Students và Teachers
2. **Collection management**: Quản lý danh sách students và teachers
3. **CRUD operations**: Add, remove, get counts
4. **Display methods**: displayInfo() hiển thị thông tin trường
5. **Note**: displayInfo() return void (console.log)

### Kết quả chạy
```
School: Truong THPT Quan 1
Address: 123 Duong A, Quan 1, TP.HCM
Teachers: 2
Students: 2
```

**[CHÈN HÌNH 30: Màn hình hiển thị Bai 30]**

---

## HƯỚNG DẪN TẠO FILE WORD HOÀN CHỈNH

### Bước 1: Chụp màn hình
1. Chạy ứng dụng React Native
2. Cuộn qua từng bài (01-30)
3. Chụp màn hình từng bài
4. Lưu với tên: `Bai01.png`, `Bai02.png`, ..., `Bai30.png`

### Bước 2: Tạo file Word
1. Mở Microsoft Word
2. Tạo document mới
3. Thêm header: "BÁO CÁO TUẦN 1 - LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG VỚI TYPESCRIPT"
4. Thêm thông tin sinh viên

### Bước 3: Copy nội dung
1. Copy từng bài từ file .md này vào Word
2. Giữ nguyên cấu trúc: Mô tả, Code, Giải thích chi tiết, Kết quả chạy

### Bước 4: Chèn hình ảnh
1. Chèn hình ảnh chụp màn hình vào mỗi bài
2. Đặt caption: "Hình X: Màn hình hiển thị Bai XX"

### Bước 5: Định dạng
1. Font: Times New Roman, size 12
2. Code: Font Consolas, size 10, background màu xám
3. Heading: Bold, size 14
4. Line spacing: 1.15

---

## TỔNG KẾT

Qua 30 bài tập, chúng ta đã học:
- Class và Object trong TypeScript
- Inheritance (Kế thừa)
- Encapsulation (Đóng gói)
- Polymorphism (Đa hình)
- Abstraction (Trừu tượng)
- Interface
- Generic Types
- Design Patterns (Singleton, Repository)
- Data Structures (Stack)
- Aggregation và Composition

**Điểm quan trọng để đạt điểm cao:**
1. Giải thích chi tiết từng dòng code
2. Chụp hình kết quả chạy rõ ràng
3. Nêu rõ concept OOP được áp dụng
4. So sánh các approach khác nhau

---

**Người thực hiện:** Nguyễn Hoàng Sơn  
**MSSV:** 23672221  
**Ngày hoàn thành:** 23/08/2026
