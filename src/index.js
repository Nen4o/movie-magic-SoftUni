const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const router = require('./router');

const port = 5000;
const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './src/views')

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: false }));
app.use(router);

mongoose.connect('mongodb://localhost:27017/movie-magic')
    .then(() => {
        console.log('DB Connected');
        app.listen(port, () => {
            console.log('Server is listening on http://localhost:' + port);
        })
    }).catch((err) => {
        console.log(err);
    })
