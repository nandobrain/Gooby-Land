var express = require('express');
var router = express.Router();
const dogsCtrl = require('../controllers/dogs');
const ensureLoggedIn = require('../config/ensureLoggedIn')

// Routes for pets '/pets'
router.get('/', dogsCtrl.index);
router.get('/new', ensureLoggedIn, dogsCtrl.new)
router.get('/:id', dogsCtrl.show)
router.post('/', ensureLoggedIn, dogsCtrl.create)
router.get('/:id/edit', ensureLoggedIn, dogsCtrl.edit)
router.put('/:id', ensureLoggedIn, dogsCtrl.update)
router.delete('/:id', ensureLoggedIn, dogsCtrl.delete)

module.exports = router;
