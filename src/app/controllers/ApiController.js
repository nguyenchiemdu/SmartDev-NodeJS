const TopCategory = require('../models/TopCategory')
class ApiController {

    // GET /json
    index(req, res, next) {
        TopCategory.find({})
            .then(respond => res.json(respond))
            .catch(e => next(e))
    }
}

module.exports = new ApiController;