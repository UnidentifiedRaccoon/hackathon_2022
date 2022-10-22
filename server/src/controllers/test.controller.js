const { connection } = require("../data/connection");
const { selectAllUsersQuery } = require("../data/queries");

const test = {
    get(req, res) {
        connection.all(selectAllUsersQuery, (err, raws) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(JSON.stringify(raws));
        });
    }
};

module.exports = test;
