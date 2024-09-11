const router = require('express').Router();
const movieServices = require('../services/movieServices');

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
        movie.stars = '&#x2605;'.repeat(movie.rating);
        res.render('details', { movie });
    } catch (err) {
        console.log(err);
    }


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