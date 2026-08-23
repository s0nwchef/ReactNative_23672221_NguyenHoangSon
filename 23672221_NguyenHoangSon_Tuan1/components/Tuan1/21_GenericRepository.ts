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

  clear(): void {
    this.items = [];
    this.nextId = 1;
  }
}

export { IEntity, Repository };
