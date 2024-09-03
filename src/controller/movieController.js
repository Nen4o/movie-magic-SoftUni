const router = require('express').Router();
const movieServices = require('../services/movieServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    movieServices.addMovie(req.body);
    res.redirect('/')
})

module.exports = router;