var crypto = require('crypto');
var Q = require('q');

module.exports = function (tokenSize) {

    var randomBytesPromise = Q.denodeify(crypto.randomBytes);

    return randomBytesPromise(tokenSize).then(function (randomBytesBuffer) {
        return randomBytesBuffer.toString('base64');
    });
};