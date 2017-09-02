let request = require('request');

let routes = (app) => {
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/start', (req, res, next) => {
    let options = {
      url: 'http://node:5000/gettime'
    };

    let callback = (err, response, body) => {
      if (err) {
        next(err);
      }
      res.send(body);
    };

    request(options, callback);
  });
};

module.exports = routes;
