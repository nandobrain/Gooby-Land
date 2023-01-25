const Dog = require('../models/dog');


module.exports = {
    index,
    new: newDog,
    create,
    show,
    edit,
    update,
    delete: deleteDog
}

function index(req, res) {
    Dog.find({}, function(err, dogs) {
       
        res.render('dogs/index', { title: 'dogs', dogs })
    })
}

function newDog(req, res) {
    res.render('dogs/new', { title: 'add dog'})
    console.log(dog)
}


function create(req, res) {
    console.log('req, ', req.user )
    req.body.user = req.user
    const dog = new Dog(req.body)
    dog.save(function(err) {
        // if (err) console.log(err)
        if (err) return res.redirect('/dogs/new')
        
        res.redirect(`/dogs/${dog._id}`)
    })
}

function show(req, res) {
    Dog.findById(req.params.id, function(err, dog) {
        
        res.render('dogs/show', { title: 'Dog Info', dog })
    })
}

async function edit(req, res) {
    console.log(req.params.id)
    Dog.findById(req.params.id, function(err, dog) {
        console.log(dog, err)
    res.render('dogs/edit', { title: 'edit dog', dog })
    })

}

function update(req, res) {
    console.log(req.body)
    req.body.user = req.user
    Dog.findOneAndUpdate({'_id':req.params.id}, req.body, function(err, dog) {
        console.log(dog, err)
        res.redirect(`/dogs/${dog._id}`)
    })
    

}

async function deleteDog(req, res) {
    console.log(req.body)
    req.body.user = req.user
    Dog.findOneAndDelete({'_id':req.params.id}, req.body, function(err, dog) {
        console.log(dog, err)
        res.redirect(`/dogs/`)
    })
  
}

