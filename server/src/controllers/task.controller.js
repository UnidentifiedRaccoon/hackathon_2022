const { connection } = require("../data/connection");
const { selectAllTasksQuery } = require("../data/queries");
const { selectTaskByIdQuery } = require("../data/queries");

const task = {
    getAllTasks(req, res) {
        connection.all(selectAllTasksQuery, (err, raws) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(JSON.stringify(raws));
        });
    },
    getTaskById(req, res) {
        connection.all(selectTaskByIdQuery, (err, raws) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(JSON.stringify(raws));
        });
    }
};

module.exports = task;