const router = require('express').Router();
const moviesServices = require('../services/movieServices');

router.get('/', async (req, res) => {
    try {
        const movies = await moviesServices.getAll().lean();
        res.render('home', { movies });
    } catch (err) {
        console.log(err);
    }

})

router.get('/about', (req, res) => {
    res.render('about');
})

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;