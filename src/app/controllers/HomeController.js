const Category = require('../models/Category')
const TopCategory = require('../models/TopCategory')
const axios = require('axios').default;
class HomeController {

    // GET /home
    index(req, res, next) {
        var options = {
            method: 'GET',
            url: 'https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/',
            headers: {
              'x-rapidapi-host': 'udemy-courses-coupon-code.p.rapidapi.com',
              'x-rapidapi-key': '9041e6ef80msh4983053313a3931p14def8jsnf768a6b435ce'
            }
          };
        var callApi = axios.request(options)
        Promise.all([Category.find(), TopCategory.find(),callApi])
            .then(respond => {
                res.render('home', { categories: respond[0], topCategories: respond[1],courses : respond[2].data });
            })
            .catch(e => next(e))
    }
}

module.exports = new HomeController;