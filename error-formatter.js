module.exports = function(res, message, stack, code) {
    res.json({
        message: message,
        stack: stack,
        code: code
    });
};