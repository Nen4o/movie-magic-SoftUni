const router = require('express').Router();
const movieServices = require('../services/movieServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    movieServices.addMovie(req.body);
    res.redirect('/')
})

router.get('/404', (req, res) => {
    res.render('404');
})
module.exports = router;