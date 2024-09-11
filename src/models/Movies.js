const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2300
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        required: true,
        maxLength: 200,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /http/,
    },
    castsId: {
        type: Array,
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;