const router = require('express').Router();
const movieServices = require('../services/movieServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    movieServices.addMovie(req.body);
    res.redirect('/')
})

router.get('/movie/details/:movieId', (req, res)=>{
    const movieId = req.params.movieId;
    const movie = movieServices.getOneMovie(movieId);
    res.render('details', { movie });
})
module.exports = router;