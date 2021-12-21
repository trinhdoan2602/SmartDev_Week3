var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var coursers = db.get('courses')
  var skills = db.get('skills')
  res.render('index', { 
    course: coursers.value(),
    skill: skills.value()
   });

});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

module.exports = router;
