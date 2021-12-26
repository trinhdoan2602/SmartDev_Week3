const Course = require('../models/Course');
const { mongooseToObject } = require('../utilities/mongoose');

class CourseController {

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then(course => {
            res.render('courses/show', { course: mongooseToObject(course) })
        })
        .catch(next)

        // res.send('COURSE DETAIL'+ req.params.slug)
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /course/store
    store(req, res, next) {
        // res.json(req.body)
        const formData =  req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/courses'))
            .catch(error => {
                
            })
    }
}

module.exports = new CourseController;