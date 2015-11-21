var mongoose = require('mongoose-q')();
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    facebook: {
        token: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);