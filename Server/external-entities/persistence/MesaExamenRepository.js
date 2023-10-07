
const MesaExamenModel = require('../models/MesaExamenModel');

class MesaExamenRepository {
  static async crear(mesaExamen) {
    const nuevaMesaExamen = new MesaExamenModel(mesaExamen);
    return nuevaMesaExamen.save();
  }
  // Otros métodos para leer, actualizar y eliminar mesas de exámenes
}

module.exports = MesaExamenRepository;