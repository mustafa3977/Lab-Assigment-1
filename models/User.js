const bcrypt = require('bcryptjs');

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.passwordHash = bcrypt.hashSync(password, 8);
  }
}

module.exports = User;