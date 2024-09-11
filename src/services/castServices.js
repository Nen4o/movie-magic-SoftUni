const Cast = require('../models/Cast');

exports.createCast = (castObj) => {
    return Cast.create(castObj);
}

exports.getAll = () => {
    return Cast.find();
}

exports.findOne = (castId) => {
    return Cast.findOne({ '_id': castId });
}

exports.findCastById = (castsIdArr) => {
    return Cast.find({ '_id': { $in: castsIdArr } });
}

