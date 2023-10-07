
class AgregarAlertaPersonalizadaUseCase {
    static async agregarAlertaPersonalizada(profesor, tipoAlerta) {
      // Validar y agregar la nueva alerta personalizada al profesor
      profesor.alertasPersonalizadas.push(tipoAlerta);
      // Guardar los cambios en la base de datos
      await ProfesorRepository.actualizarAlertasPersonalizadas(profesor.id, profesor.alertasPersonalizadas);
      return profesor;
    }
  }
  
  module.exports = AgregarAlertaPersonalizadaUseCase;
  