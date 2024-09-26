const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    //const token = req.header('Authorization');
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    //console.log(token)
    if (!token) return res.status(401).send('Acceso denegado');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = verified.userId;
        next();
    } catch (err) {
        res.status(400).send('Token inválido');
    }
};
module.exports = { authMiddleware };