const Courses = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    // [GET] /courses/:slug
    async show(req, res, next) {
        await Courses.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/create
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg?`;
        const course = new Courses(formData);
        // res.json(course);
        await course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => res.send(err));
    }
}

module.exports = new CourseController();
