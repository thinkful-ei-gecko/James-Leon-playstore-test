const morgan = require('morgan');
const express = require('express');
const app = express();

require('./playstore.js')

app.use(morgan('dev'));
