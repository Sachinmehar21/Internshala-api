const express = require('express');
const router = express.Router();
const { homepage } = require('../Controllers/controller');

router.get('/', homepage);

module.exports = router;