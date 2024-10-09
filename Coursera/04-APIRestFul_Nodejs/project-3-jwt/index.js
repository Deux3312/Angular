const express = require('express');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'your_secret_key';
app.use(express.json());
app.use(passport.initialize());
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const users = [
    { id: 1, username: 'john', password: '123' },
    { id: 2, username: 'jane', password: '456' },
]

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}, (jwtPlayload, done) => {
    const user = users.find((u) => u.id == jwtPlayload.sub);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}))
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = user.find(u => u.username === username && u.password === password)
    if (user) {
        const payload = { sub: user.id, username: user.username }
        const token = jwt.sign(payload, secretKey);
        res.json(token);
    } else {
        res.status(404).json({ message: 'Authentication fail' });
    }
})
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'Protected route access successfully' })
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})