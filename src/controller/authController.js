const router = require('express').Router();
const authServices = require('../services/authServices');

router.get('/register', (req, res) => {
    res.render('auth/register')
})

router.post('/register', (req, res) => {
    console.log(req.body);
    authServices.createUser(req.body);
    res.redirect('/login');
})

module.exports = router;