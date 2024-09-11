const Cast = require('../models/Cast');

exports.createCast = (castObj) => {
    return Cast.create(castObj);
}

