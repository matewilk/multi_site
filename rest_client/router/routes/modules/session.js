const session = {
  'get': (req, res) => {
    if (req.session.user) {
      res.send({authenticated: true});
    } else {
      res.send({authenticated: false});
    }
  }
};

module.exports = session;
