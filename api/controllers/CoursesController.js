/**
 * CoursesController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

    findCourseByTitle: function(req, res) {
        var id = req.param('id');
        Courses.findOne({ title: id })
            .populate('owner')
            .exec(function(err, courses) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (courses === undefined) {
                    return res.notFound();
                } else
                    return res.json({
                        notFound: false,
                        userData: courses
                     
                    });
            });
    }
};
