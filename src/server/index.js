const express = require('express');
const os = require('os');
var favicon = require('serve-favicon');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
const auth = require('./routes/auth');
const user_route = require('./routes/user');
const app = express();

var mongoose = require('mongoose');
var mongo_url = 'mongodb://139.99.100.228/auth-db';

mongoose.Promise = require('bluebird');
mongoose.connect(mongo_url, { promiseLibrary: require('bluebird')} )
  .then(()=> console.log('connection successful'))
  .catch( err => console.log(err));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static('dist'));

app.use('/api/auth', auth);
app.use('/api', user_route);
app.listen(7000, () => console.log('Listening on port 8080!'));
