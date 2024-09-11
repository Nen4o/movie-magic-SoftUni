const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    born: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /http/,
    },
})

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;

