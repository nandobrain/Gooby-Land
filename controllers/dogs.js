const Dog = require('../models/dog');


module.exports = {
    index,
    new: newDog,
    create
}

function index(req, res) {
    Dog.find({}, function(err, dogs) {
        console.log(hitting)
        res.render('dogs/index', { dogs })
    })
}

function newDog(req, res) {
    res.render('dogs/new')
}


function create(req, res) {
    const Dog = new Dog(req.body)
    dog.save(function(err) {
        if (err) console.log(err)
        if (err) return res.redirect('/dogs/new')
        console.log(dog)
        res.redirect('/dogs/')
    })
}

