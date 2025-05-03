class Database {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  findUserByEmail(email) {
    return this.users.find((u) => u.email === email);
  }
}

module.exports = new Database();