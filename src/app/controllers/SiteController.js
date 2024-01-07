const Courses = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
    home(req, res, next) {
        Courses.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // .catch((err) => next(err));
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
