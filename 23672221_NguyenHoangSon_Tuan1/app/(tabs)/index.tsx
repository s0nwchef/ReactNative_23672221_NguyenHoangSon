import { ScrollView, Text, View, StyleSheet } from 'react-native';

// Import all 30 exercises
import { Person } from '@/components/Tuan1/01_PersonClass';
import { Student } from '@/components/Tuan1/02_StudentSubclass';
import { Car } from '@/components/Tuan1/03_CarClass';
import { Rectangle } from '@/components/Tuan1/04_RectangleClass';
import { BankAccount } from '@/components/Tuan1/05_BankAccount';
import { Book as BookClass } from '@/components/Tuan1/06_BookClass';
import { User } from '@/components/Tuan1/07_UserEncapsulation';
import { Product, ProductManager } from '@/components/Tuan1/08_ProductFiltering';
import { BasicAnimal } from '@/components/Tuan1/09_AnimalInterface';
import { Account } from '@/components/Tuan1/10_AccessModifiers';
import { Animal, Dog, Cat } from '@/components/Tuan1/11_InheritanceAnimal';
import { Bird, Fish, Duck } from '@/components/Tuan1/12_MultipleInterfaces';
import { Square, Circle } from '@/components/Tuan1/13_AbstractShape';
import { Manager, Developer } from '@/components/Tuan1/14_EmployeeHierarchy';
import { Library, Book, User as LibraryUser } from '@/components/Tuan1/15_LibraryClass';
import { Box } from '@/components/Tuan1/16_GenericBox';
import { Logger } from '@/components/Tuan1/17_SingletonPattern';
import { MathUtil } from '@/components/Tuan1/18_StaticUtility';
import { Animal as PolyAnimal, Dog as PolyDog, Cat as PolyCat } from '@/components/Tuan1/19_PolymorphismOverriding';
import { Car as VehicleCar, Bike } from '@/components/Tuan1/20_VehicleInterface';
import { Repository } from '@/components/Tuan1/21_GenericRepository';
import { Stack } from '@/components/Tuan1/22_StackDataStructure';
import { CashPayment, CardPayment, MomoPayment } from '@/components/Tuan1/23_PaymentInterface';
import { Fan, AirConditioner } from '@/components/Tuan1/24_AbstractAppliance';
import { Shape } from '@/components/Tuan1/25_StaticMethod';
import { Order, Product as OrderProduct } from '@/components/Tuan1/26_OrderCalculation';
import { Teacher } from '@/components/Tuan1/27_TeacherSubclass';
import { DogProtected, CatProtected } from '@/components/Tuan1/28_ProtectedAccess';
import { CarMovable, RobotMovable } from '@/components/Tuan1/29_MovableInterface';
import { School, Student as SchoolStudent, Teacher as SchoolTeacher } from '@/components/Tuan1/30_SchoolAggregation';

export default function HomeScreen() {
  const person = new Person('Nguyen Van A', 25);
  
  const student = new Student('Tran Thi B', 20, 'A');

  const car = new Car('Toyota', 'Camry', 2018);

  const rectangle = new Rectangle(10, 5);

  const account = new BankAccount('1234567890', 'Nguyen Van C', 1000000);
  const depositResult = account.deposit(500000);
  const withdrawResult = account.withdraw(200000);
  
  const book = new BookClass('Lap trinh TypeScript', 'Tac Gia A', 2023);

  const user = new User('Le Van D', 'levand@example.com');

  const productManager = new ProductManager();
  productManager.addProduct(new Product('Laptop', 15000000));
  productManager.addProduct(new Product('Phone', 8000000));
  productManager.addProduct(new Product('Table', 2000000));
  const filteredProducts = productManager.filterByPriceRange(5000000, 20000000);

  const basicAnimal = new BasicAnimal('Animal 1', 'Unknown');

  const normalAccount = new Account('0987654321', 'Nguyen Van E', 2000000);
  const premiumAccount = new Account('1122334455', 'Tran Van F', 5000000);

  const dog = new Dog('Rex', 3, 'Bulldog');
  const cat = new Cat('Mimi', 2, 'White');

  const bird = new Bird('Eagle');
  const fish = new Fish('Shark');
  const duck = new Duck('Donald');

  const square = new Square(5);
  const circle = new Circle(3);

  const manager = new Manager(1, 'Pham Van G', 50000000, 10);
  const developer = new Developer(2, 'Hoang Van H', 30000000, ['TypeScript', 'React']);

  const library = new Library();
  library.addBook({ title: 'TypeScript Handbook', author: 'Microsoft', year: 2022 });
  library.addBook({ title: 'React Native Guide', author: 'Facebook', year: 2023 });
  library.addUser({ name: 'Reader 1' });
  library.addUser({ name: 'Reader 2' });

  const stringBox = new Box<string>('Hello TypeScript!');
  const numberBox = new Box<number>(42);

  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();

  const sum = MathUtil.add(10, 20);
  const product = MathUtil.multiply(5, 4);

  const polyDog = new PolyDog('Buddy');
  const polyCat = new PolyCat('Whiskers');

  const vehicleCar = new VehicleCar('VinFast', 'VF8');
  const bike = new Bike('Giant', 'Escape 3');

  interface UserEntity { id: number; name: string; email: string };
  const userRepo = new Repository<UserEntity>();
  userRepo.add({ id: 1, name: 'User 1', email: 'user1@test.com' });
  userRepo.add({ id: 2, name: 'User 2', email: 'user2@test.com' });
  const allUsers = userRepo.getAll();

  const stack = new Stack<number>();
  stack.push(10);
  stack.push(20);
  stack.push(30);

  const cashPayment = new CashPayment();
  const cardPayment = new CardPayment('1234567890123456');
  const momoPayment = new MomoPayment('0901234567');

  const fan = new Fan('Samsung');
  const airConditioner = new AirConditioner('Daikin');

  const circleShape = Shape.createCircle(5);
  const rectShape = Shape.createRectangle(4, 6);
  const areaComparison = Shape.compareArea(circleShape, rectShape);

  const order = new Order();
  order.addProduct({ name: 'Product A', price: 100000 });
  order.addProduct({ name: 'Product B', price: 50000 });

  const teacher = new Teacher('Ta Van J', 40, 'Mathematics', 15);

  const dogProtected = new DogProtected('Buddy', 4, 'Golden Retriever');
  const catProtected = new CatProtected('Kitty', 3, 'Black');

  const carMovable = new CarMovable('Tesla');
  const robotMovable = new RobotMovable('R2D2');

  const school = new School();
  school.addStudent({ name: 'Nguyen Van K', grade: '10A1' });
  school.addStudent({ name: 'Tran Thi L', grade: '11B2' });
  school.addTeacher({ name: 'Le Van M', subject: 'Math' });
  school.addTeacher({ name: 'Pham Thi N', subject: 'Physics' });

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
        <Text style={styles.text}>{car.showInfo()}</Text>
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
        {filteredProducts.map((p, index) => (
          <Text key={index} style={styles.text}>  - {p.displayInfo()}</Text>
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
        <Text style={styles.text}>Premium: {premiumAccount.displayInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 11: Inheritance Animal</Text>
        <Text style={styles.text}>Dog: {dog.name}, Age: {dog.age}, Breed: {dog.breed}</Text>
        <Text style={styles.text}>{dog.bark()}</Text>
        <Text style={styles.text}>Cat: {cat.name}, Age: {cat.age}, Color: {cat.color}</Text>
        <Text style={styles.text}>{cat.meow()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 12: Multiple Interfaces</Text>
        <Text style={styles.text}>Bird: {bird.fly()}</Text>
        <Text style={styles.text}>Fish: {fish.swim()}</Text>
        <Text style={styles.text}>Duck: {duck.fly()} | {duck.swim()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 13: Abstract Shape</Text>
        <Text style={styles.text}>Square: Area={square.area()}, Perimeter={square.perimeter()}</Text>
        <Text style={styles.text}>Circle: Area={circle.area().toFixed(2)}, Perimeter={circle.perimeter().toFixed(2)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 14: Employee Hierarchy</Text>
        <Text style={styles.text}>Manager: {manager.name}, Salary: {manager.salary}</Text>
        <Text style={styles.text}>{manager.manage()}</Text>
        <Text style={styles.text}>Developer: {developer.name}, Languages: {developer.languages.join(', ')}</Text>
        <Text style={styles.text}>{developer.code()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 15: Library Class</Text>
        <Text style={styles.text}>Books: {library.getBooks().length}</Text>
        <Text style={styles.text}>Users: {library.getUsers().length}</Text>
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
        <Text style={styles.text}>Dog: {polyDog.sound()}</Text>
        <Text style={styles.text}>Cat: {polyCat.sound()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 20: Vehicle Interface</Text>
        <Text style={styles.text}>Car: {vehicleCar.brand} {vehicleCar.model}</Text>
        <Text style={styles.text}>{vehicleCar.start()}</Text>
        <Text style={styles.text}>Bike: {bike.brand} {bike.model}</Text>
        <Text style={styles.text}>{bike.start()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 21: Generic Repository</Text>
        <Text style={styles.text}>Total users: {allUsers.length}</Text>
        <Text style={styles.text}>User 1: {allUsers[0]?.name} ({allUsers[0]?.email})</Text>
        <Text style={styles.text}>User 2: {allUsers[1]?.name} ({allUsers[1]?.email})</Text>
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
        <Text style={styles.text}>Total: {order.calculateTotal().toLocaleString()} VND</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 27: Teacher Subclass</Text>
        <Text style={styles.text}>{teacher.displayInfo()}</Text>
        <Text style={styles.text}>{teacher.teach()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 28: Protected Access</Text>
        <Text style={styles.text}>{dogProtected.displaySound()}</Text>
        <Text style={styles.text}>{catProtected.displaySound()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 29: Movable Interface</Text>
        <Text style={styles.text}>{carMovable.move()}</Text>
        <Text style={styles.text}>{robotMovable.move()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Bai 30: School Aggregation</Text>
        <Text style={styles.text}>{school.displayInfo()}</Text>
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
