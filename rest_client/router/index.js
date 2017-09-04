module.exports = (app) => {
    app.use('/api/login', require('./routes/login'));
    app.use('/api/session', require('./routes/session'));
    app.use('/api/node', require('./routes/node'));
};
