const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

// Configura el middleware para servir archivos estáticos desde el directorio actual
app.use(express.static(path.join(__dirname)));

// Configura una ruta para manejar todas las solicitudes y servir tu SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor Express iniciado en http://localhost:${port}`);
});

