var express = require('express');
var router = express.Router();
const dogsCtrl = require('../controllers/dogs');
const ensureloggedIn = require('../config/ensureLoggedIn')

// Routes for pets '/pets'
router.get('/', dogsCtrl.index);
router.get('/new', ensureLoggedIn, dogsCtrl.new)
router.post('/', ensureLoggedIn, dogsCtrl.create)

module.exports = router;
