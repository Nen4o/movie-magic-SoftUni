const express = require('express');

const port = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
})
