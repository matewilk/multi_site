const express = require('express');
const router = express.Router();
const node = require('./modules/node');

router.get('/:server/:node', node.get);

module.exports = router;
