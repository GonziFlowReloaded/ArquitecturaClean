const ConfigurarAlertasUseCase = require('../use-cases/ConfigurarAlertasUseCase');

class AlertaController {
  static async configurarPreferenciasAlerta(req, res) {
    try {
      const { id } = req.params;
      const preferencias = req.body;
      const profesorActualizado = await ConfigurarAlertasUseCase.configurarPreferenciasAlerta(id, preferencias);
      res.status(200).json(profesorActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al configurar las preferencias de alerta' });
    }
  }
  // Otros métodos para manejar la configuración de alertas
}

module.exports = AlertaController;