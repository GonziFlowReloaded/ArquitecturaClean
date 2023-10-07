
const mongoose = require('mongoose');

const mesaExamenSchema = new mongoose.Schema({
  nombre: String,
  profesores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' }],
  fecha: Date,
  // Otros campos
});

module.exports = mongoose.model('MesaExamen', mesaExamenSchema);
