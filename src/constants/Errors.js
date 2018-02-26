export class DatabaseError extends Error {
  constructor(...args) {
    super(...args);
    this.context = 'Database';
  }
}

export class RouterError extends Error {
  constructor(...args) {
    super(...args);
    this.context = 'Router';
  }
}
