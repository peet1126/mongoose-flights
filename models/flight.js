var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airports: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        required: true,
    },
    arrival: {
        type: Date,
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    departs: {
        type: Date,
        required: true,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        required: true,
    },
    destination: {
        type: [destinationSchema],
        required: true,
    }

},
{
    timestamps: true,
});


module.exports = mongoose.model('Flight', flightSchema);