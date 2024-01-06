const Courses = require('../models/Course');

class SiteController {
    home(req, res) {
        Courses.find({})
            .then((courses) => res.json(courses))
            .catch((err) => res.status(400).json({ error: 'ERROR' }));
        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
