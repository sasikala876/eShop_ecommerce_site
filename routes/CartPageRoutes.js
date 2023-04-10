var express = require('express');
var router = express.Router();

const { cartDetailsPost } = require('../controllers/CartPageController');

router.post('/',cartDetailsPost);

module.exports = router;