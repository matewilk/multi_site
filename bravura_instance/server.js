// Require express and create an instance on the app
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(session({
  name: 'test.sess',
  secret: 'verysecretkey',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://mongodb:27017/session'
  }),
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 1000 // 1 hour
  }
}));

// require app routes
require('./routes')(app);

// catch 404
app.use((req, res, next) => {
  res.status(404).send('This route does not exist!');
});

// handle app errors
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .send({
      message: err.message,
      error: err
    });
});

// start the server on port 4000
let port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`bravura instance listening on port ${port}`); });
