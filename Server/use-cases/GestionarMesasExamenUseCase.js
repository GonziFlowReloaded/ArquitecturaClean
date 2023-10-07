
const MesaExamenRepository = require('../external-entities/persistence/MesaExamenRepository');

class GestionarMesasExamenUseCase {
  static async crearMesaExamen(mesaExamen) {
    // Validar la información de la mesa de examen
    // Lógica adicional de validación

    // Crear la mesa de examen en la base de datos
    const nuevaMesa = await MesaExamenRepository.crear(mesaExamen);
    return nuevaMesa;
  }

  static async editarMesaExamen(id, datosActualizados) {
    // Validar la información actualizada
    // Lógica adicional de validación

    // Actualizar la mesa de examen en la base de datos
    const mesaActualizada = await MesaExamenRepository.actualizar(id, datosActualizados);
    return mesaActualizada;
  }
  // Otros métodos para gestionar mesas de exámenes
}

module.exports = GestionarMesasExamenUseCase;
