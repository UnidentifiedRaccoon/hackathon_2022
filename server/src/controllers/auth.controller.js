const { getUserByEmail, createUser } = require('../data/repositiries/user.repository');
const { createError } = require('../util/error');
const { createSuceess } = require('../util/success');
const { sign } = require('../util/jwt');

const auth = {
    signUp(req, res) {
        getUserByEmail(req.body.email, (err, user) => {
            if (err) {
                res.writeHead(400);
                return res.end(createError('Can not create user'));
            }
            if (user) {
                res.writeHead(400);
                return res.end(createError('User with such email is already exists'));
            }
            createUser(req.body, (err, user) => {
                if (err || !user) {
                    console.log(err);
                    res.writeHead(500);
                    return res.end(createError('Can not create user'));
                }
                sign({ email: user.email, id: user.id }, (err, token) => {
                    if (err) {
                        res.writeHead(500);
                        return res.end(createError('Can not create user'));
                    }

                    res.writeHead(200, { 'Authorization' : `Bearer ${token}` });
                    return res.end(createSuceess('User was successfully created', { ...user, password: undefined, token }));
                });
            });
        });
    },
    signIn(req, res) {
        getUserByEmail(req.body.email, (err, user) => {
            if (err) {
                res.writeHead(500);
                return res.end(createError('Can not authorize user'));
            }
            if (user && req.body.password === user.password) {
                return sign({ email: user.email, id: user.id }, (err, token) => {
                    if (err) {
                        res.writeHead(500);
                        return res.end(createError('Can not authorize user'));
                    }

                    res.writeHead(200, { 'Authorization' : `Bearer ${token}` });
                    return res.end(createSuceess('Successfully authorized', { ...user, password: undefined, token }));
                });
            }

            res.writeHead(403, 'Unauthorized');
            res.end(createError('Incorrect email or password'));
        });
    }
};

module.exports = auth;
