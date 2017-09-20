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
    url: 'mongodb://mongodb:27017/session' // mongodb is the name of the docker container
  }),
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 1000 // 1 hour
  }
}));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

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
