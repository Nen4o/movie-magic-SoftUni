const jwt = require('jsonwebtoken');

const SECRET_KEY = require('../config/constants');

module.exports = (req, res, next) => {

    const token = req.cookies['auth'];
    if (!token) {
        res.locals.isAuthenticated = false;
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        res.locals.isAuthenticated = true;
        console.log(decodedToken);
        next();
    } catch (error) {
        console.log(err);
        return next();
    }
}
