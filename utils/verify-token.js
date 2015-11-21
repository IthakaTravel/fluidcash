var TokenModel = require('./../models/token');
var UserModel = require('./../models/user');
var sendError = require('./../error-formatter');


module.exports = function (req, res, token) {
    return TokenModel.findOne({
        tokenString: token
    }).then(function (tokenDocument) {

        if (!tokenDocument || tokenDocument.expiredAt < new Date()) {
            res.status(401);
            sendError(res, 'Token not found!!', null, 401);
            return;
        }

        req.tokenDocument = tokenDocument;

        return tokenDocument;
    }).then(function (tokenDocument) {

        return UserModel.findOneQ({

            _id: tokenDocument.user

        }).then(function (user) {

            return {
                user: user,
                token: tokenDocument
            };

        });

    });
};