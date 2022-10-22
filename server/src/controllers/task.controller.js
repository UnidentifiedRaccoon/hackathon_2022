const { createError } = require("../util/error")
const { createSuceess } = require("../util/success")
const { getTasks, getTaskById, deleteTask, createTask } = require("../data/repositiries/task.repository");

const task = {
    getAllTasks(_, res) {
        getTasks((err, rows) => {
            if (err) {
                console.error(err);
                return res.send(createError('Can not get tasks'));
            }
            res.send(JSON.stringify(rows));
        });
    },

    getTaskById(req, res) {
        getTaskById(req.params.id, (err, rows) => {
            if (err) {
                console.error(err);
                return res.send(createError('Can not get this task'));
            }
            res.send(JSON.stringify(rows));
        });
    },

    deleteTask(req, res) {
        deleteTask(req.params.id, (err, rows) => {
            if (err) {
                console.error(err);
                return res.send(createError('Can not delete task'));
            }
            res.send(JSON.stringify(rows));
        })
    },

    createTask(req, res) {
        createTask(req.body, err => {
            if (err) {
                console.log(err);
                return res.send(createError('Can not create task'));
            }
            return res.send(createSuceess('Task was successfully created'));
        });
    }
};

module.exports = task;
