var express = require('express');
var router = express.Router();

const { aDetailsPost } = require('../controllers/AddressDetailsController');

router.post('/', aDetailsPost);

module.exports = router;