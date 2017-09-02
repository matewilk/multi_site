module.exports = (app) => {
    app.use('/api/login', require('./routes/login'));
    app.use('/api/session', require('./routes/session'));
};
