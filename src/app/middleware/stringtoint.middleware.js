
const stringtoint = (req, res, next) => {
    var body = req.body
    if ('id' in body) body.id = parseInt(body.id)
    return next()
}

module.exports = stringtoint