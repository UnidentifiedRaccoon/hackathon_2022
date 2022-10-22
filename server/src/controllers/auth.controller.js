const { getUserByEmail, createUser } = require('../data/repositiries/user.repository');
const { createError } = require('../util/error');
const { createSuceess } = require('../util/success');
const { sign } = require('../util/jwt');

const auth = {
    signUp(req, res) {
        getUserByEmail(req.body.email, (err, user) => {
            if (err) { return res.end(createError('Can not create user')); }
            if (user) {

                return res.end(createError('User with such email is already exists'));
            }
            createUser(req.body, err => {
                if (err) {
                    console.log(err);
                    return res.end(createError('Can not create user'));
                }
                sign(req.body.email, (err, token) => {
                    if (err) { return res.end(createError('Can not create user')); }
                    res.writeHead(200, { 'Authorization' : `Bearer ${token}` });

                    return res.end(createSuceess('User was successfully created'));
                });
            });
        });
    },
    signIn(req, res) {
        getUserByEmail(req.body.email, (err, user) => {
            if (err) { return res.end(createError('Can not authorize user')); }
            if (user && req.body.password === user.password) {
                return sign(req.body.email, (err, token) => {
                    if (err) { return res.end(createError('Can not authorize user')); }
                    res.writeHead(200, { 'Authorization' : `Bearer ${token}` });
    
                    return res.end(createSuceess('Successfully authorized'));
                });
            }
            res.end(createError('Incorrect email or password'));
        });
    }
};

module.exports = auth;
