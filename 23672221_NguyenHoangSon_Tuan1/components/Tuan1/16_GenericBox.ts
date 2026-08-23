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
