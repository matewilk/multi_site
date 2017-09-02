// Require express and create an instance on the app
let express = require('express');
let app = express();

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
