const request = require('request');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send(`I'm up and running on port ${req.app.settings.port}`);
  });

  app.post('/api/requestnode', (req, res, next) => {
    let nodeNo = req.body.node;
    let options = {
      url: `http://node${nodeNo}:500${nodeNo}/gettime`
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
