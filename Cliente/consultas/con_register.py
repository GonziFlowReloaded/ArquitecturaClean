import requests

def registro(dni, password, nombre):
    #Post:
    peticion = {
        "dni": dni,
        "password": password,
        "nombre": nombre
    }

    response = requests.post("http://localhost:5000/registro", json=peticion)

    if response.status_code == 200:
        print("Usuario registrado con éxito")
        return True
    else:
        print("Error al registrar usuario")
        print(response.json())

