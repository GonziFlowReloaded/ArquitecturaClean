import requests

def login(dni, password):
    #Post:
    peticion = {
        "dni": dni,
        "password": password
    }

    response = requests.post("http://localhost:5000/login", json=peticion)

    if response.status_code == 200:
        print("Usuario logueado con éxito")
        return True
    else:
        print("Error al loguear usuario")
        print(response.json())
