const { connection } = require("../data/connection");
const { selectAllTasksQuery } = require("../data/queries");
const { selectTaskByIdQuery } = require("../data/queries");

const task = {
    getAllTasks(_, res) {
        connection.all(selectAllTasksQuery, (err, rows) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(JSON.stringify(rows));
        });
    },
    getTaskById(req, res) {
        connection.get(selectTaskByIdQuery, [req.params.id], (err, rows) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(JSON.stringify(rows));
        });
    }
};

module.exports = task;
