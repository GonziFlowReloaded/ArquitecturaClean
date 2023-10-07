from interfaz.login import mostrar_iniciar_sesion
from interfaz.register import mostrar_registrarse

def mostrar_principal():
    print("Bienvenido a la interfaz principal")
    print("1. Iniciar sesión")
    print("2. Registrarse")
    print("3. Salir")

    opcion = input("Ingrese una opción: ")

    if opcion == "1":
        mostrar_iniciar_sesion()
    elif opcion == "2":
        mostrar_registrarse()


