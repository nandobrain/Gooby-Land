const Dog = require('../models/dog')

module.exports = {
    create,
    delete: deleteComment
}


function create(req, res) {
    Dog.findById(req.params.id, function(err, dog) {

        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        dog.comments.push(req.body)
        console.log('show push')
        dog.save(function(err) {
            res.redirect(`/dogs/${dog._id}`)
        })
    })
}

async function deleteComment(req, res, next) {
    try {
        const dog = await Dog.findOne({'comments._id': req.params.id})
        if (!dog) return res.redirect('/dogs')
        dog.comments.remove(req.params.id)
        await dog.save()
        res.redirect(`/dogs/${dog._id}`)
    } catch(err) {
        return next(err)
    }
}