const express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  path = require('path');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  name: 'test.sess',
  secret: 'verysecretkey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 1000 // 1 hour
  }
}));

// set static path
app.use(express.static('client/public'));
// enable html5 mode
app.all('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
