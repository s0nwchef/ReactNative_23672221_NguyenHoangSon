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
