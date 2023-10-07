const GestionarMesasExamenUseCase = require('../use-cases/GestionarMesasExamenUseCase');

class MesaExamenController {
  static async crearMesaExamen(req, res) {
    try {
      const { nombre, profesores, fecha } = req.body;
      const mesaExamen = new MesaExamen(null, nombre, profesores, fecha);
      const nuevaMesa = await GestionarMesasExamenUseCase.crearMesaExamen(mesaExamen);
      res.status(201).json(nuevaMesa);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la mesa de examen' });
    }
  }

  static async editarMesaExamen(req, res) {
    try {
      const { id } = req.params;
      const datosActualizados = req.body;
      const mesaActualizada = await GestionarMesasExamenUseCase.editarMesaExamen(id, datosActualizados);
      res.status(200).json(mesaActualizada);
    } catch (error) {
      res.status(500).json({ error: 'Error al editar la mesa de examen' });
    }
  }
  // Otros métodos para manejar mesas de exámenes
}

module.exports = MesaExamenController;