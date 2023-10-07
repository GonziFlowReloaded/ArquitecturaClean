
def mostrar_registrarse():
    print("*"*50)
    print("Registrarse")
    user = input("Ingrese su usuario: ")
    password = input("Ingrese su contraseña: ")
    password2 = input("Ingrese nuevamente su contraseña: ")

    if password == password2:
        print("Usuario registrado con éxito")
    else:
        print("Las contraseñas no coinciden")
        mostrar_registrarse()