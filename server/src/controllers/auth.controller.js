const { getUserByEmail, createUser } = require('../data/repositiries/user.repository');
const { createError } = require('../util/error');
const { createSuceess } = require('../util/success');

const auth = {
    signUp(req, res) {
        getUserByEmail(req.body.email, (err, user) => {
            if (err) { return console.error(err); }
            if (user) {
                return res.send(createError('User with such email is already exists'));
            }
            createUser(req.body, err => {
                if (err) {
                    console.log(err);
                    return res.send(createError('Can not create user'));
                }
                return res.send(createSuceess('User was successfully created'));
            });
        });
    }
};

module.exports = auth;
