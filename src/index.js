const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

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

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
})
