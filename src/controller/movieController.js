const router = require('express').Router();
const movieServices = require('../services/movieServices');
const castServices = require('../services/castServices');

const jwt = require('jsonwebtoken');
const SECRET_KEY = require('../config/constants');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', async (req, res) => {

    const token = req.cookies['auth'];
    const userToken = jwt.verify(token, SECRET_KEY);

    try {
        const movieData = req.body;
        movieData.ownerId = userToken._id;
        await movieServices.addMovie(movieData);
        res.redirect('/')
    } catch (err) {
        res.redirect('/create')
        console.log(err);
    }
})

router.get('/movie/details/:movieId', async (req, res) => {
    const token = req.cookies['auth'];
    const userToken = jwt.verify(token, SECRET_KEY);

    const movieId = req.params.movieId;
    try {
        const movie = await movieServices.getOneMovie(movieId).lean();
        const casts = await castServices.findCastById(movie.castsId).lean();

        const isOwner = movie.ownerId == userToken._id;

        movie.stars = '&#x2605;'.repeat(movie.rating);
        res.render('details', { movie, casts, isOwner });
    } catch (err) {
        console.log(err);
    }
})

router.get('/movie/edit/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await movieServices.getOneMovie(movieId).lean();

        res.render('edit', { movie });
    } catch (err) {

    }
})

router.post('/movie/edit/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movieData = req.body;
    try {
        await movieServices.updateMovieById(movieId, movieData);
        res.redirect(`/movie/details/${movieId}`)
    } catch (err) {
        console.log(err);
    }
})

router.get('/search', (req, res) => {
    res.render('search');
})

router.post('/search', async (req, res) => {
    const query = req.body;


    const movie = await movieServices.findMovies(query).lean();

    console.log(movie);
    res.render('search', { movie })

})
module.exports = router;