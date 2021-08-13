const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// setting template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// setting body-parser
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

module.exports = app;