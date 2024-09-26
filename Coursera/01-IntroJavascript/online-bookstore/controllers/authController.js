const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // El modelo del usuario

// Registrar nuevo usuario
exports.register = async(req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).send('Usuario registrado');
    } catch (error) {
        res.status(500).send('Error en el registro');
    }
};

// Iniciar sesión
exports.login = async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(400).send('Credenciales incorrectas');
        }
    } catch (error) {
        res.status(500).send('Error en el inicio de sesión');
    }
};