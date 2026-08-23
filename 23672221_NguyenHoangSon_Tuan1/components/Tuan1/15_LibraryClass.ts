interface Book { title: string; author: string; year: number; }
interface User { name: string; }

class Library {
  private books: Book[] = [];
  private users: User[] = [];
  
  addBook(book: Book): void { this.books.push(book); }
  addUser(user: User): void { this.users.push(user); }
  getBooks(): Book[] { return this.books; }
  getUsers(): User[] { return this.users; }
}

export { Library, Book, User };
