var mongoose = require('mongoose-q')();
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    currencyTo: {
        type: Schema.ObjectId,
        ref: 'Currency',
        required: true
    },
    currencyFrom: {
        type: Schema.ObjectId,
        ref: 'Currency',
        required: true
    },
    have: {
        type: Number,
        required: true
    },
    expected: {
        type: Number,
        required: true
    },
    received: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['InProgress', 'Completed']
    },
    createdAt: {
        type: Date,
        required: true
    },
    completedAt: {
        type: Data,
        required: true
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);