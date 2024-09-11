const router = require('express').Router();
const castServices = require('../services/castServices');
const movieServices = require('../services/movieServices');

router.get('/cast/create', (req, res) => {
    res.render('cast-create');
})

router.post('/cast/create', async (req, res) => {
    const castObj = req.body;

    try {
        await castServices.createCast(castObj);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/cast/create')
    }

})

router.get('/movie/add-cast/:movieId', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieServices.getOneMovie(movieId).lean();
    const casts = await castServices.getAll().lean();

    res.render('cast-attach', { movie, casts })
    console.log(movieId);

})

router.post('/movie/add-cast/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const cast = req.body;

    try {
        await movieServices.updateMovieCast(cast.cast, movieId);
        res.redirect('/movie/details/' + movieId);
    } catch (err) {
        console.log(err);
    }

})
module.exports = router;