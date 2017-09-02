const express = require('express');
const router = express.Router();
const session = require('./modules/session');

router.get('/', session.get);

module.exports = router;
