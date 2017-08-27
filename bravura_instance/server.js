// Require express and create an instance on the app
let express = require('express');
let app = express();

// request to root (localhost:3000)
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/start', (req, res) => {
  res.send('Start polling implementation');
});

// catch 404
app.use((req, res, next) => {
  res.status(404).send('This route does not exist!');
});

// handle app errors
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .send('error', {
      message: err.message,
      error: err
    });
});

// start the server on port 3000
let port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}`); });
