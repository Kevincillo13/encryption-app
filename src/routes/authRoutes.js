const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para el formulario de registro
router.get('/register', (req, res) => {
  res.render('register');
});

// Ruta para procesar el registro
router.post('/register', authController.register);

// Ruta para el formulario de login
router.get('/login', (req, res) => {
  res.render('login');
});

// Ruta para procesar el login
router.post('/login', authController.login);

module.exports = router; // ¡Esto es crucial!