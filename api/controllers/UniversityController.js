/**
 * UniversityController
 *
 * @description :: Server-side logic for managing universities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    findUniversityByName: function(req, res) {
        var id = req.param('id');
        University.findOne({ name: id })
            .populate('entry')
            .exec(function(err, university) {
                if (err) {
                    return res.json({
                        error: err
                    });
                }
                if (university === undefined) {
                    return res.notFound();
                } else
                    return res.json({
                        notFound: false,
                        userData: university
                    });
            });
    }
};

