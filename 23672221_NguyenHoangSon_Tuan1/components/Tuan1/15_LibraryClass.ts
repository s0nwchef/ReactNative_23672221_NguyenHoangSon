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

  displayBooks(): void {
    console.log(`\nDanh sách sách trong thư viện "${this.name}":`);
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.displayInfo()}`);
    });
    console.log(`Tổng số sách: ${this.books.length}`);
  }

  displayUsers(): void {
    console.log(`\nDanh sách thành viên:`);
    this.users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.displayInfo()}`);
    });
    console.log(`Tổng số thành viên: ${this.users.length}`);
  }

  getBookCount(): number {
    return this.books.length;
  }

  getUserCount(): number {
    return this.users.length;
  }
}

export { Library };
