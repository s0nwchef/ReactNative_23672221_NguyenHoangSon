interface IEntity { id: number; }

class Repository<T extends IEntity> {
  private items: T[] = [];
  
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return this.items; }
  getById(id: number): T | undefined { return this.items.find(i => i.id === id); }
}

export { IEntity, Repository };
