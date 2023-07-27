const express = require('express');
const createResult = require('../controllers/result');
const router = express.Router();

router.post('/create',createResult);

module.exports = router;