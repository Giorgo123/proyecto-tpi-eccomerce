require('dotenv').config(); // Carga las variables de entorno primero

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI; // Aquí ya debería estar definida
console.log('URI de conexión:', uri);


const app = express();

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
mongoose.connect(uri, { // Usa 'uri' que ya tiene el valor correcto
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Rutas básicas
app.get('/', (req, res) => {
  res.send('Welcome to MegaStore API');
});

module.exports = app;
