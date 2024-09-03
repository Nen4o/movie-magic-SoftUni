const router = require('express').Router();
const movieServices = require('../services/movieServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    movieServices.addMovie(req.body);
    res.redirect('/')
})

router.get('/movie/details/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieServices.getOneMovie(movieId);
    movie.stars = '&#x2605;'.repeat(movie.rating);

    res.render('details', { movie });
})

router.get('/search', (req, res) => {
    res.render('search');
})

router.post('/search', (req, res) => {
    const query = req.body;

    const movie = movieServices.findMovies(query)
    res.render('search', { movie })

})
module.exports = router;