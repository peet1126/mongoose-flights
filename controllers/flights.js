const Flight = require('../models/flight');
const today = Date.now()

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: "Flight Details", flight});
    });
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err){
        if (err) {
            console.log(err);
            return res.redirect('/flights/new');
        }
        res.redirect('/flights');
    })
}

function newFlight(req, res) {
    res.render('flights/new', { 
        title: "New Flight"
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(err, flights);
        res.render('flights/index', { 
            title: "All Flights",
            flights,
            today });
    });
}