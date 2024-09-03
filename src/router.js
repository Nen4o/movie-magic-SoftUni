const router = require('express').Router();

const homeController = require('./controller/homeController');
const movieController = require('./controller/movieController');

router.use(homeController);
router.use(movieController);

router.get('*', (req, res)=>{
    res.redirect('/404');
})

module.exports = router;