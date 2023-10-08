const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Ruta que devuelve un código de estado HTTP 200 (OK)
app.get('/mi_ruta', (req, res) => {
  res.status(200).send('OK'); // Envía "OK" con código de estado 200
});

app.get('/', (req, res) => {
  res.send('Hello Worlda!');
})
// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});