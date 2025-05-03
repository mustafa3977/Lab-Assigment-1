const db = require('../utils/database');
const User = require('../models/User');

class AuthService {
  register(name, email, password) {
    if (db.findUserByEmail(email)) {
      return { success: false, message: 'Email already exists.' };
    }

    const user = new User(name, email, password);
    db.addUser(user);
    return { success: true, message: 'Registration successful!' };
  }
}

module.exports = new AuthService();