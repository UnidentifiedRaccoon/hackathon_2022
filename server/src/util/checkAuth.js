const { createError } = require("./error");
const { verify } = require("./jwt");

const checkAuth = (req, res, next) => {
    const authHeader = req.get('authorization');
    if (!authHeader) {
        res.writeHead(403, 'Unauthorized');
        return res.end(createError('Got an unauthorized request'));
    }

    const token = authHeader.split(' ')[1];
    verify(token, (err, valid) => {
        if (err || !valid) {
            res.writeHead(403, 'Unauthorized');
            return res.end(createError('Got an unauthorized request'));
        }
        next();
    });
}

module.exports = {
    checkAuth
};
