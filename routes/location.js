var express = require('express');
var router = express.Router();

var LocationModel = require('./../models/location');

var sendError = require('./../error-formatter');

router.post('/', function (req, res, next) {

    if (!req.body.latitude || !req.body.longitude || !req.body.accuracy) {
        res.status(400);
        sendError(res, 'Latitude, Longitude and accuracy is required', null, 400);
        return;
    }

    if (req.body.latitude > 180 || req.body.latitude < -180) {
        res.status(400);
        sendError(res, 'Latitude value should be in range [-180, 180]', null, 400);
        return;
    }

    if (req.body.longitude > 180 || req.body.longitude < -180) {
        res.status(400);
        sendError(res, 'Longitude value should be in range [-180, 180]', null, 400);
        return;
    }

    return LocationModel.findOneAndUpdateQ({
        user: req.user._id
    }, {
        coordinates: [
            req.body.longitude,
            req.body.latitude
        ],
        accuracy: req.body.accuracy,
        friendlyName: req.body.friendlyName
    }, {
        upsert: true,
        new: true
    }).then(function () {
        return res.json({
            accepted: true
        });
    }).catch(function (err) {

        console.error(err.stack);

        res.status(500);
        sendError(res, 'Internal Server Error!', null, 500);
    });

});

module.exports = router;
