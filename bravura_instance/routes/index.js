const request = require('request');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.send(`I'm up and running on port ${req.app.settings.port}`);
  });

  app.get('/api/session', (req, res) => {
    if (req.session.user) {
      res.send({authenticated: true});
    } else {
      res.send({authenticated: false});
    }
  });

  app.post('/api/requestnode', (req, res, next) => {
    let nodeNo = req.body.nodeNo;
    let options = {
      url: `http://node${nodeNo}:5000/gettime`
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
