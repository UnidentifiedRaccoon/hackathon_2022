const { createError } = require("../util/error")
const { createSuceess } = require("../util/success")
const { getTasks, getTaskById, deleteTask, createTask } = require("../data/repositiries/task.repository");
const { getPayload } = require('../util/jwt');

const task = {
    getAllTasks(_, res) {
        getTasks((err, rows) => {
            if (err) {
                res.writeHead(500);
                return res.end(createError('Can not get tasks'));
            }
            res.end(JSON.stringify(rows));
        });
    },

    getTaskById(req, res) {
        getTaskById(req.params.id, (err, task) => {
            if (err || !task) {
                res.writeHead(500);
                return res.end(createError('Can not get this task'));
            }
            res.end(JSON.stringify(task));
        });
    },

    deleteTask(req, res) {
        deleteTask(req.params.id, (err, rows) => {
            if (err) {
                res.writeHead(500);
                return res.end(createError('Can not delete task'));
            }
            res.end(JSON.stringify(rows));
        })
    },

    createTask(req, res) {
        const token = req.get('authorization').split(' ')[1];
        const currentUserId = getPayload(token).id;

        createTask(currentUserId, req.body, err => {
            if (err) {
                res.writeHead(500);
                return res.end(createError('Can not create task'));
            }
            return res.end(createSuceess('Task was successfully created'));
        });
    }
};

module.exports = task;
