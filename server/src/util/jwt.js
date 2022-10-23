const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../consts');

const sign = (payload, callback) => {
    jwt.sign(
        payload,
        JWT_KEY,
        (err, token) => {
            if (err) { return callback(err);}
            callback(null, token);
        }
    );
}

const verify = (token, callback) => {
    jwt.verify(token, JWT_KEY, (err, _) => {
        if (err) { return callback(err, false); }
        callback(err, true);
    });
}

const getPayload = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (err) {
        console.error(err);
        return;
    }
}

module.exports = {
    sign,
    verify,
    getPayload,
}
