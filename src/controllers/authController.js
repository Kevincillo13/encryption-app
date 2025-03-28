const User = require('../models/User');
const cipher = require('../utils/cipher');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const encryptedPassword = cipher.encrypt(password); // Ciframos
    
    const user = new User({ username, password: encryptedPassword });
    await user.save();
    
    res.redirect('/login?registered=true');
  } catch (err) {
    console.error(err);
    res.render('register', { error: 'Error al registrar. ¿Usuario ya existe?' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.render('login', { error: 'Usuario no encontrado' });
    }
    
    const decryptedPassword = cipher.decrypt(user.password); // Desciframos
    
    if (password === decryptedPassword) {
      // ¡Éxito! Mostramos la contraseña descifrada (solo para demostración)
      res.render('login-success', { 
        username: user.username,
        encryptedPassword: user.password, // Para mostrar en DB
        decryptedPassword // Para probar el descifrado
      });
    } else {
      res.render('login', { error: 'Contraseña incorrecta' });
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Error en el servidor' });
  }
};