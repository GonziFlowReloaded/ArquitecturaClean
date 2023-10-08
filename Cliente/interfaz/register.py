from consultas.con_register import registro
from interfaz.principal import mostrar_principal

def mostrar_registrarse():
    print("*"*50)
    print("Registrarse")
    dni = input("Ingrese su dni: ")
    nombre = input("Ingrese su nombre: ")
    password = input("Ingrese su contraseña: ")
    password2 = input("Ingrese nuevamente su contraseña: ")

    if password == password2:
        if registro(dni, password, nombre):
            print("Usuario registrado con éxito")
    else:
        print("Las contraseñas no coinciden")
        salir = input("¿Desea salir? (S/N): ")
        if salir == "S":
            mostrar_principal()
        else:
            mostrar_registrarse()