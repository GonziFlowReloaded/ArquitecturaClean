class Profesor {
    constructor(dni, nombre, email, preferenciasAlerta) {
      this.id = dni;
      this.nombre = nombre;
      this.email = email;
      this.preferenciasAlerta = preferenciasAlerta;
    }
  }
  
  module.exports = Profesor;