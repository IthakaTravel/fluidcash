var express = require('express');
var router = express.Router();

var CurrencyModel = require('./../models/currency');

var sendError = require('./../error-formatter');

var errorFormatter = require('./../error-formatter');

router.get('/', function(req, res, next) {
    return CurrencyModel.find({}).execQ().then(function (result) {
        res.json({result: result});
    }).catch(function (err) {
        console.log(err);
        errorFormatter(res, 'Internal server error!', err.stack, 500);
    });
});


router.post('/', function (req, res, next) {

    if (!req.body.name || !req.body.country) {
        res.status(400);
        sendError(res, 'Name and Country are required', null, 400);
    }

    var currencyModel = new CurrencyModel({
        name: req.body.name,
        country: req.body.country
    });

    return currencyModel.saveQ().then(function (savedData) {
        res.json({
            accepted: true,
            data: savedData
        });
    });
});

module.exports = router;
