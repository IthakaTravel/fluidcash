var express = require('express');
var router = express.Router();

var LocationModel = require('./../models/location');

var sendError = require('./../error-formatter');

router.post('/', function (req, res, next) {

    if (!req.body.latitude || !req.body.longitude || !req.body.accuracy) {
        res.status(400);
        sendError(res, 'Lattitude and Longitude is required', null, 400);
        return;
    }

    return LocationModel.findOneAndUpdateQ({
        user: req.user._id
    }, {
        coordinates: [
            req.body.longitude,
            req.body.latitude
        ],
        accuracy: req.body.accuracy
    }, {
        upsert: true,
        new: true
    }).then(function () {
        return res.json({
            accepted: true
        });
    }).catch(function (err) {
        res.status(500);
        sendError(res, 'Internal Server Error!', null, 500);
    });

});

module.exports = router;
