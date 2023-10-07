const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tu_basededatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MesaExamenModel = mongoose.model('MesaExamen', {
  nombre: String,
  profesores: [String],
  fecha: Date,
});

const ProfesorModel = mongoose.model('Profesor', {
  nombre: String,
  email: String,
  preferenciasAlerta: [{ tipo: String, horasAntelacion: Number }],
});

const TipoAlertaModel = mongoose.model('TipoAlerta', {
  nombre: String,
  horasAntelacion: Number,
});

module.exports = {
  MesaExamenModel,
  ProfesorModel,
  TipoAlertaModel,
};