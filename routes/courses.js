var express = require('express');
var router = express.Router();

const siteController = require('../controllers/SiteController');

siteController.index
router.get('/', siteController.index)

const courseController = require('../controllers/CourseController');
router.get('/:slug', courseController.show)


module.exports = router;
