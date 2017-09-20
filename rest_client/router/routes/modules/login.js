const login = {
  'post': (req, res) => {
    if (req.body.password === 'pass') {
      // have to set headers when using node session with fetch API
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      req.session.user = req.body.email;
      res.json({authenticated: true});
    } else {
      res.send({authenticated: false});
    }
  },
  'delete': (req, res) => {
    res.contentType('application/json');

    req.session.destroy();
    res.send({authenticated: false});
  }
};

module.exports = login;
