class AnimalBase {
  constructor(public name: string, protected age: number) {}
  protected makeSound(): string { return "Some sound"; }
  public displaySound(): string { return `${this.name}: ${this.makeSound()}`; }
}

class DogProtected extends AnimalBase {
  constructor(name: string, age: number, public breed: string) { super(name, age); }
  protected makeSound(): string { return "Gâu gâu!"; }
}

class CatProtected extends AnimalBase {
  constructor(name: string, age: number, public color: string) { super(name, age); }
  protected makeSound(): string { return "Meo meo!"; }
}

export { AnimalBase, DogProtected, CatProtected };
