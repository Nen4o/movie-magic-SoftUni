const router = require('express').Router();
const castServices = require('../services/castServices');

router.get('/cast/create', (req, res) => {
    res.render('cast-create');
})

router.post('/cast/create', async (req, res) => {
    const castObj = req.body;

    try {
        const cast = await castServices.createCast(castObj);
        console.log(cast);

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/cast/create')
    }

})
module.exports = router;