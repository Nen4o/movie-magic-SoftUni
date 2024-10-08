const router = require('express').Router();
const movieServices = require('../services/movieServices');
const castServices = require('../services/castServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', async (req, res) => {
    try {
        await movieServices.addMovie(req.body);
        res.redirect('/')
    } catch (err) {
        res.redirect('/create')
        console.log(err);
    }
})

router.get('/movie/details/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await movieServices.getOneMovie(movieId).lean();
        const casts = await castServices.findCastById(movie.castsId).lean();

        movie.stars = '&#x2605;'.repeat(movie.rating);
        res.render('details', { movie, casts });
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