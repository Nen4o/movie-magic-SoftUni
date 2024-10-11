const router = require('express').Router();

const homeController = require('./controller/homeController');
const movieController = require('./controller/movieController');
const castController = require('./controller/castController');
const authController = require('./controller/authController');

router.use(homeController);
router.use(movieController);
router.use(castController);
router.use(authController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;