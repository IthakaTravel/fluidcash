var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({
        location: 'Hello World'
    });
});

router.get('/matches', function (req, res, next) {
    
});

module.exports = router;