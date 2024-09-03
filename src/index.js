const express = require('express');
const hbs = require('express-handlebars');

const port = 5000;
const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './src/views')


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
})
