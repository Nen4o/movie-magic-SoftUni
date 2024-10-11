const router = require('express').Router();
const authServices = require('../services/authServices');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'dsajjbYU2G3UGAo3UI6'

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', (req, res) => {
    console.log(req.body);
    authServices.createUser(req.body);
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', async (req, res) => {
    const loginData = req.body;
    const user = await authServices.findUser(loginData);

    if (!user) {
        console.log('User does not exist');
        res.redirect('/register');
    }

    const isPasswordValid = await bcrypt.compare(loginData.password, user.password);

    if (!isPasswordValid) {
        console.log('Password does not mach');
        res.end();
    }

    const payload = {
        _id: user._id,
        email: user.email
    }

    const userToken = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' });
    res.cookie('auth', userToken);

    res.redirect('/');
})

module.exports = router;