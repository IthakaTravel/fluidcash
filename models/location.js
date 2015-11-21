var mongoose = require('mongoose-q')();
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    Accuracy: {
        type: Number,
        required: true
    },
    FriendlyName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Location', LocationSchema);