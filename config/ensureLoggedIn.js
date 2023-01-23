module.exports = function(req, res, next) {
    if(req.isAthenticated()) return next()
    res.redirect('/auth/goolge')
}