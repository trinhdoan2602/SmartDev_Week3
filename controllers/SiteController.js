const Course = require('../models/Course')

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     }
        //     else {
        //         next(err);
        //     }
        // });

        Course.find({})
            .then(courses => res.render('courses-view', {
                courses
            }))
            .catch(next)
        

    }

    // [GET] /
}

module.exports = new SiteController;