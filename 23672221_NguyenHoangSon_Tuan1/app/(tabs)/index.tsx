import { ScrollView, Text, View, StyleSheet } from 'react-native';

// Import all 29 exercises - Correct imports based on actual file content
import { Person } from '@/components/Tuan1/01_PersonClass';
import { Student } from '@/components/Tuan1/02_StudentSubclass';
import { Car } from '@/components/Tuan1/03_CarClass';
import { Rectangle } from '@/components/Tuan1/04_RectangleClass';
import { BankAccount } from '@/components/Tuan1/05_BankAccount';
import { Book } from '@/components/Tuan1/06_BookClass';
import { User } from '@/components/Tuan1/07_UserEncapsulation';
import { Product, ProductManager } from '@/components/Tuan1/08_ProductFiltering';
import { BasicAnimal } from '@/components/Tuan1/09_AnimalInterface';
import { Account, PremiumAccount } from '@/components/Tuan1/10_AccessModifiers';
import { Animal, Dog, Cat } from '@/components/Tuan1/11_InheritanceAnimal';
import { Bird, Fish, Duck } from '@/components/Tuan1/12_MultipleInterfaces';
import { Square, Circle, Rectangle as ShapeRectangle } from '@/components/Tuan1/13_AbstractShape';
import { Manager, Developer } from '@/components/Tuan1/14_EmployeeHierarchy';
import { Library } from '@/components/Tuan1/15_LibraryClass';
import { Box } from '@/components/Tuan1/16_GenericBox';
import { Logger } from '@/components/Tuan1/17_SingletonPattern';
import { MathUtil } from '@/components/Tuan1/18_StaticUtility';
import { Bird as PolyBird, Snake } from '@/components/Tuan1/19_PolymorphismOverriding';
import { Car as VehicleCar, Bike } from '@/components/Tuan1/20_VehicleInterface';
import { Repository } from '@/components/Tuan1/21_GenericRepository';
import { Stack } from '@/components/Tuan1/22_StackDataStructure';
import { CashPayment, CardPayment, MomoPayment } from '@/components/Tuan1/23_PaymentInterface';
import { Fan, AirConditioner } from '@/components/Tuan1/24_AbstractAppliance';
import { Shape } from '@/components/Tuan1/25_StaticMethod';
import { Order } from '@/components/Tuan1/26_OrderCalculation';
import { Teacher } from '@/components/Tuan1/27_TeacherSubclass';
import { DogProtected, CatProtected } from '@/components/Tuan1/28_ProtectedAccess';
import { CarMovable, RobotMovable, DroneMovable } from '@/components/Tuan1/29_MovableInterface';
import { School } from '@/components/Tuan1/30_SchoolAggregation';

export default function HomeScreen() {
  const person = new Person('Nguyen Van A', 25);
  
  const student = new Student('Tran Thi B', 20, 'A');

  const car = new Car('Toyota', 'Camry', 2018);

  const rectangle = new Rectangle(10, 5);

  const account = new BankAccount('1234567890', 'Nguyen Van C', 1000000);
  const depositResult = account.deposit(500000);
  const withdrawResult = account.withdraw(200000);
  
  const book = new Book('Lap trinh TypeScript', 'Tac Gia A', 2023);

  const user = new User('Le Van D', 'levand@example.com', 30);

  const productManager = new ProductManager();
  productManager.addProduct(new Product(1, 'Laptop', 15000000, 'Electronics'));
  productManager.addProduct(new Product(2, 'Phone', 8000000, 'Electronics'));
  productManager.addProduct(new Product(3, 'Table', 2000000, 'Furniture'));
  const filteredProducts = productManager.filterByPriceRange(5000000, 20000000);

  const basicAnimal = new BasicAnimal('Animal 1', 'Unknown', 5);

  const normalAccount = new Account('0987654321', 'Nguyen Van E', 2000000);
  const premiumAccount = new PremiumAccount('1122334455', 'Tran Van F', 5000000);

  const dog = new Dog('Rex', 3, 'Bulldog');
  const cat = new Cat('Mimi', 2, 'White');

  const bird = new Bird('Eagle', 500);
  const fish = new Fish('Shark', 200);
  const duck = new Duck('Donald', 100, 5);

  const square = new Square(5);
  const circle = new Circle(3);
  const shapeRect = new ShapeRectangle(4, 6);

  const manager = new Manager(1, 'Pham Van G', 50000000, 10);
  const developer = new Developer(2, 'Hoang Van H', 30000000, ['TypeScript', 'React']);

  const library = new Library('Thu Vien Quan 1');
  library.addBook(new Book('TypeScript Handbook', 'Microsoft', 2022));
  library.addBook(new Book('React Native Guide', 'Facebook', 2023));

  const stringBox = new Box<string>('Hello TypeScript!');
  const numberBox = new Box<number>(42);

  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  const sum = MathUtil.add(10, 20);
  const product = MathUtil.multiply(5, 4);

  const polyBird = new PolyBird('Tweety', 1, 'Canary');
  const snake = new Snake('Python', 5, 2.5);

  const vehicleCar = new VehicleCar('VinFast', 'VF8', 2024);
  const bike = new Bike('Giant', 'Escape 3', 2023);

  interface UserEntity { id: number; name: string; email: string };
  const userRepo = new Repository<UserEntity>();
  const user1 = userRepo.add({ name: 'User 1', email: 'user1@test.com' });
  const user2 = userRepo.add({ name: 'User 2', email: 'user2@test.com' });

  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  stack.push(30);

  const cashPayment = new CashPayment();
  const cardPayment = new CardPayment('1234567890123456');
  const momoPayment = new MomoPayment('0901234567');

  const fan = new Fan('Samsung', 'AF-123');
  const airConditioner = new AirConditioner('Daikin', 'AC-456');

  const circleShape = Shape.createCircle(5);
  const rectShape = Shape.createRectangle(4, 6);
  const areaComparison = Shape.compareArea(circleShape, rectShape);

  const order = new Order('ORD001', 'Nguyen Van I');
  order.addItem({ id: 1, name: 'Product A', price: 100000, quantity: 2 });
  order.addItem({ id: 2, name: 'Product B', price: 50000, quantity: 3 });

  const teacher = new Teacher('Ta Van J', 40, 'Mathematics', 15);

  const dogProtected = new DogProtected('Buddy', 4, 'Golden Retriever');
  const catProtected = new CatProtected('Kitty', 3, 'Black');

  const carMovable = new CarMovable('Tesla');
  const robotMovable = new RobotMovable('R2D2');
  const droneMovable = new DroneMovable('DJI Mavic');

  const school = new School('Truong THPT Quan 1', '123 Duong A, Quan 1, TP.HCM');
  school.addStudent(new Student('Nguyen Van K', 16, '10A1'));
  school.addStudent(new Student('Tran Thi L', 17, '11B2'));
  school.addTeacher(new Teacher('Le Van M', 45, 'Math', 20));
  school.addTeacher(new Teacher('Pham Thi N', 40, 'Physics', 15));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Bai 01: Person Class</Text>
        <Text style={styles.text}>{person.displayInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 02: Student Subclass</Text>
        <Text style={styles.text}>{student.displayAllInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 03: Car Class</Text>
        <Text style={styles.text}>Brand: {car.brand}</Text>
        <Text style={styles.text}>Model: {car.model}</Text>
        <Text style={styles.text}>Year: {car.year}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 04: Rectangle Class</Text>
        <Text style={styles.text}>{rectangle.displayInfo()}</Text>
        <Text style={styles.text}>Is Square: {rectangle.isSquare() ? 'Yes' : 'No'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 05: Bank Account</Text>
        <Text style={styles.text}>{account.displayInfo()}</Text>
        <Text style={styles.text}>{depositResult}</Text>
        <Text style={styles.text}>{withdrawResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 06: Book Class</Text>
        <Text style={styles.text}>{book.displayInfo()}</Text>
        <Text style={styles.text}>Age: {book.getAge(2026)} years</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 07: User Encapsulation</Text>
        <Text style={styles.text}>{user.displayInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 08: Product Filtering</Text>
        <Text style={styles.text}>Products (5-20M VND):</Text>
        {filteredProducts.map((p) => (
          <Text key={p.id} style={styles.text}>  - {p.displayInfo()}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 09: Animal Interface</Text>
        <Text style={styles.text}>{basicAnimal.displayInfo()}</Text>
        <Text style={styles.text}>Sound: {basicAnimal.sound()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 10: Access Modifiers</Text>
        <Text style={styles.text}>Normal: {normalAccount.displayInfo()}</Text>
        <Text style={styles.text}>Premium: {premiumAccount.displayPremiumInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 11: Inheritance Animal</Text>
        <Text style={styles.text}>{dog.displayInfo()}</Text>
        <Text style={styles.text}>{dog.bark()}</Text>
        <Text style={styles.text}>{cat.displayInfo()}</Text>
        <Text style={styles.text}>{cat.meow()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 12: Multiple Interfaces</Text>
        <Text style={styles.text}>{bird.displayInfo()}</Text>
        <Text style={styles.text}>{fish.displayInfo()}</Text>
        <Text style={styles.text}>{duck.displayInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 13: Abstract Shape</Text>
        <Text style={styles.text}>{square.displayInfo()}</Text>
        <Text style={styles.text}>{circle.displayInfo()}</Text>
        <Text style={styles.text}>{shapeRect.displayInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 14: Employee Hierarchy</Text>
        <Text style={styles.text}>{manager.displayInfo()}</Text>
        <Text style={styles.text}>{manager.manage()}</Text>
        <Text style={styles.text}>{developer.displayInfo()}</Text>
        <Text style={styles.text}>{developer.code()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 15: Library Class</Text>
        <Text style={styles.text}>Library: {library.name}</Text>
        <Text style={styles.text}>Books: {library.getBookCount()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 16: Generic Box</Text>
        <Text style={styles.text}>{stringBox.displayInfo()}</Text>
        <Text style={styles.text}>{numberBox.displayInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 17: Singleton Pattern</Text>
        <Text style={styles.text}>Logger1 === Logger2: {logger1 === logger2 ? 'True' : 'False'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 18: Static Utility</Text>
        <Text style={styles.text}>10 + 20 = {sum}</Text>
        <Text style={styles.text}>5 * 4 = {product}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 19: Polymorphism Overriding</Text>
        <Text style={styles.text}>{polyBird.sound()}</Text>
        <Text style={styles.text}>{polyBird.fly()}</Text>
        <Text style={styles.text}>{snake.sound()}</Text>
        <Text style={styles.text}>{snake.crawl()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 20: Vehicle Interface</Text>
        <Text style={styles.text}>{vehicleCar.getInfo()}</Text>
        <Text style={styles.text}>{vehicleCar.start()}</Text>
        <Text style={styles.text}>{bike.getInfo()}</Text>
        <Text style={styles.text}>{bike.start()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 21: Generic Repository</Text>
        <Text style={styles.text}>Total users: {userRepo.count()}</Text>
        <Text style={styles.text}>User 1: {user1.name} ({user1.email})</Text>
        <Text style={styles.text}>User 2: {user2.name} ({user2.email})</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 22: Stack Data Structure</Text>
        <Text style={styles.text}>Size: {stack.size()}</Text>
        <Text style={styles.text}>Top: {stack.peek()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 23: Payment Interface</Text>
        <Text style={styles.text}>{cashPayment.pay(100000)}</Text>
        <Text style={styles.text}>{cardPayment.pay(50000)}</Text>
        <Text style={styles.text}>{momoPayment.pay(75000)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 24: Abstract Appliance</Text>
        <Text style={styles.text}>{fan.turnOn()}</Text>
        <Text style={styles.text}>{airConditioner.turnOn()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 25: Static Method</Text>
        <Text style={styles.text}>Circle area: {circleShape.area.toFixed(2)}</Text>
        <Text style={styles.text}>Rectangle area: {rectShape.area}</Text>
        <Text style={styles.text}>{areaComparison}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 26: Order Calculation</Text>
        <Text style={styles.text}>Order ID: {order.orderId}</Text>
        <Text style={styles.text}>Customer: {order.customerName}</Text>
        <Text style={styles.text}>Total: {order.calculateTotal().toLocaleString()} VND</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 27: Teacher Subclass</Text>
        <Text style={styles.text}>{teacher.displayInfo()}</Text>
        <Text style={styles.text}>{teacher.teach()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 28: Protected Access</Text>
        <Text style={styles.text}>{dogProtected.displayInfo()}</Text>
        <Text style={styles.text}>{dogProtected.displaySound()}</Text>
        <Text style={styles.text}>{catProtected.displayInfo()}</Text>
        <Text style={styles.text}>{catProtected.displaySound()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 29: Movable Interface</Text>
        <Text style={styles.text}>{carMovable.move()}</Text>
        <Text style={styles.text}>{robotMovable.move()}</Text>
        <Text style={styles.text}>{droneMovable.move()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 30: School Aggregation</Text>
        <Text style={styles.text}>School: {school.name}</Text>
        <Text style={styles.text}>Address: {school.address}</Text>
        <Text style={styles.text}>Teachers: {school.getTeacherCount()}</Text>
        <Text style={styles.text}>Students: {school.getStudentCount()}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});
