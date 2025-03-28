const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'encryptionApp' // Nombre de la DB en MongoDB Atlas
    });
    console.log('✅ MongoDB Conectado');
  } catch (err) {
    console.error('❌ Error de conexión a MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;