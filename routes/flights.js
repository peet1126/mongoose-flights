var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights'); 
/* GET users listing. */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);
router.post('/:id', flightsCtrl.dest);

module.exports = router;
