const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/register', (req, res) => authController.register(req, res));

module.exports = router;