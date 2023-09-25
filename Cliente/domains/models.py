
class MesaExamen:
    def __init__(self, id, fecha, profesores, alumnos):
        self.id = id
        self.fecha = fecha
        self.profesores = profesores
        self.alumnos = alumnos

class Profesor:
    def __init__(self, id, nombre, notificaciones):
        self.id = id
        self.nombre = nombre
        self.notificaciones = notificaciones