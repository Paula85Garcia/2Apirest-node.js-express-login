const express = require('express');
const app = express();

app.use(express.json());  // Para manejar el cuerpo de las solicitudes JSON

// Endpoint para manejar POST a '/login'
app.post('/login', (req, res) => {
    // Aquí iría la lógica de autenticación, por ejemplo:
    const { username, password } = req.body;

    // Simulación de autenticación (esto deberías cambiarlo a lógica real)
    if (username === 'admin' && password === '1234') {
        res.status(200).send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
