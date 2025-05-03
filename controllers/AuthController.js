const authService = require('../services/AuthService');

class AuthController {
  register(req, res) {
    const { name, email, password } = req.body;
    const result = authService.register(name, email, password);
    res.json(result);
  }
}

module.exports = new AuthController();