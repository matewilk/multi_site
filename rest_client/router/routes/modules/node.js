const request = require('request');

const node = {
  'get': (req, res, next) => {
    let serverNo = req.param('server');
    let nodeNo = req.param('node');

    let options = {
      url: `http://bravura${serverNo}:4000/api/requestnode`,
      json: {nodeNo: nodeNo}
    };

    let callback = (err, response, body) => {
      if (err) {
        next(err);
      }
      res.send(body);
    };

    request.post(options, callback);
  }
};

module.exports = node;
