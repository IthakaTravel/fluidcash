var mongoose = require('mongoose-q')();
var Schema = mongoose.Schema;

var TokenSchema = new Schema({
    tokenString: {
        type: String
    },
    expiresAt: {
        type: Date
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Token', TokenSchema);
