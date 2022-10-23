const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../consts');

const sign = (login, callback) => {
    jwt.sign(
        { login },
        JWT_KEY,
        (err, token) => {
            if (err) { return callback(err);}
            callback(null, token);
        }
    );
}

const verify = (token, callback) => {
    jwt.verify(token, JWT_KEY, (err, decoded) => {
        if (err) { return callback(err, false); }
        callback(err, true);
    });
}

module.exports = {
    sign,
    verify,
}
