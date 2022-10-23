const { getUsers } = require("../data/repositiries/user.repository");

const users = {
    getUsers(req, res) {
        getUsers((err, rows) => {
            if (err) {
                res.writeHead(500);
                return res.end(createError('Can not get users'));
            }
            res.end(JSON.stringify(rows));
        });
    }
}

module.exports = users;