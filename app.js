const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Server setup
const app = express();
const port = process.env.PORT || 5000;

//View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
  process.env.MONGOLAB_ORANGE_URI ||
  'mongodb://localhost/new-visions';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
const mongoose = require('mongoose');
mongoose.connect(uristring, {useNewUrlParser: true}, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});
mongoose.Promise = global.Promise;

//Logger
app.use((req, res, next) => {
  console.log("\n" + req.method, req.path, '\n=====\n','req.query: ', req.query, '\n req.body: ', req.body, '\n');
  next();
});

//Routing
const index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port);
console.log(`Started server on port ${port}`);