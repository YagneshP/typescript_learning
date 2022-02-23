// create noSql db in memory

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
};

// Implemets 

class InMemoryDatabase implements Database {
  db : Record<string, string> = {}
  get(id: string): string{
     return this.db[id];
  }
  set(id: string, value: string): void{
    this.db[id] = value;
  }
}