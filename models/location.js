var mongoose = require('mongoose-q')();
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    accuracy: {
        type: Number,
        required: true
    },
    friendlyName: {
        type: String
    },
    coordinates: {
        type: [Number],
        index: '2d',
        required: true
    }
});

module.exports = mongoose.model('Location', LocationSchema);