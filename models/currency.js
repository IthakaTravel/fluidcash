var mongoose = require('mongoose-q')();
var Schema = mongoose.Schema;


var CurrencySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Currency', CurrencySchema);