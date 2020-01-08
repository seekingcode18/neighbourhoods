const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Home page!'));

app.listen(port, () => console.log('Listening on 8080'));