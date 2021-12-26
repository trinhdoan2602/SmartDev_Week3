var express = require('express');
var router = express.Router();

const siteController = require('../controllers/SiteController');

siteController.index
router.get('/', siteController.index)


module.exports = router;
