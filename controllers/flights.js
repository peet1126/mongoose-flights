const Flight = require('../models/flight');
const today = Date.now()

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    dest,
}

function dest(req, res) {
    console.log('dest func hit ===> --->')
    console.log(req.body)
    console.log('this is the id : ', req.params.id)
    // var newPlace = new Flight(req.body);
    // newPlace.save(function(flight, err){;
    //     if (err) {
    //         console.log(err);
    //         res.redirect('/flights/:id');
    //     }
    //     res.redirect('/flights');
    // })
    //this is with a promise
    Flight.findById(req.params.id)
    .then( flight => {
        res.send('success')
    })
    .catch(error => {
        console.log(error.message)
        res.send(error)
    })
    
  
    // newPlace.save()
    // .then(flight => {
    //     console.log(flight)
    //     res.redirect('/flights')
    // })
    // .catch(error => {
    //     console.log(error)
    //     res.send(error)
    // })
};

function show(req, res) {
    console.log('show is hit')
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: "Flight Details", flight});
    });
}

function create(req, res) {
    console.log('create is hit')
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
    console.log('new flight hit')
    res.render('flights/new', { 
        title: "New Flight"
    });
}

function index(req, res) {
    console.log('index hit')
    Flight.find({}, function(err, flights) {
        console.log(err, flights);
        res.render('flights/index', { 
            title: "All Flights",
            flights,
            today });
    });
}