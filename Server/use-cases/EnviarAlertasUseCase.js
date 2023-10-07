// use-cases/EnviarAlertasUseCase.js

const CorreoService = require('../external-entities/CorreoService');
const WhatsAppService = require('../external-entities/WhatsAppService');
const TelegramService = require('../external-entities/TelegramService');

class EnviarAlertasUseCase {
  static async enviarAlertaInmediata(profesor, mensaje) {
    if (profesor.preferenciasAlerta.email) {
      const correoService = new CorreoService();
      correoService.enviarCorreo(profesor.email, 'Alerta Inmediata', mensaje);
    }

    if (profesor.preferenciasAlerta.whatsapp) {
      const whatsappService = new WhatsAppService();
      whatsappService.enviarMensaje(profesor.numeroWhatsApp, mensaje);
    }

    if (profesor.preferenciasAlerta.telegram) {
      const telegramService = new TelegramService();
      telegramService.enviarMensaje(profesor.usuarioTelegram, mensaje);
    }
  }
  // Métodos para enviar alertas nocturnas de resumen y alertas de recordatorio
}

module.exports = EnviarAlertasUseCase;
