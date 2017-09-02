const login = {
    'post': (req, res) => {
        if(req.body.password.value === 'pass') {
            req.session.user = req.body.email.value;
            res.send(true);
        } else {
            res.send(false);
        }
    },
    'delete': (req, res) => {
        res.contentType('application/json');

        req.session.destroy();
        res.send({authenticated: false});
    }
};

module.exports = login;
