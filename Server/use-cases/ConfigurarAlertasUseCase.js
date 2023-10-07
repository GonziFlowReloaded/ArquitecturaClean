
class ConfigurarAlertasUseCase {
    static async configurarPreferenciasAlerta(profesor, preferencias) {
      // Validar y actualizar las preferencias de alerta del profesor
      profesor.preferenciasAlerta = preferencias;
      // Guardar los cambios en la base de datos
      await ProfesorRepository.actualizarPreferenciasAlerta(profesor.id, preferencias);
      return profesor;
    }
  }
  
  module.exports = ConfigurarAlertasUseCase;
  