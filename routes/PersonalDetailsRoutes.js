var express = require('express');
var router = express.Router();

const { pDetailsPost } = require('../controllers/PersonalDetailsController');

router.post('/',pDetailsPost);

module.exports = router;