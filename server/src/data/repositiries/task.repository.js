const { connection } = require("../connection");
const { getPointsByTaskId } = require("./point.repository");

const selectAllTasksQuery = `SELECT * FROM tasks`;
const selectTaskByIdQuery = `SELECT * FROM tasks WHERE id = ?`;
const deleteTaskByIdQuery = `DELETE FROM tasks WHERE id = ?`;

const createTaskQuery = `
    INSERT INTO tasks (
        title,
        description,
        executor_id,
        priority,
        deadline,
        date_created,
        creator_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
    RETURNING *;`;


const getTasks = (callback) => {
    connection.all(selectAllTasksQuery, (err, rows) => {
        let tasksLoaded = 0;

        if (!rows || !rows.length) {
            return callback('No tasks has been received');
        }

        rows.forEach(task => {
            getPointsByTaskId(task.id, (err, points) => {
                tasksLoaded++;
                if (err) { return; }
                task.points = points;
                if (tasksLoaded === rows.length) {
                    callback(err, rows);
                }
            });
        });
    });
}
    
const getTaskById = (id, callback) => {
    connection.get(selectTaskByIdQuery, [id], (err, task) => {
        if (err || !task) { return callback(err); }
        
        getPointsByTaskId(task.id, (err, points) => {
            if (err) { return callback(err); }
            task.points = points;
            callback(err, task);
        });
    });
}

const deleteTask = (id, callback) => {
    connection.run(deleteTaskByIdQuery, [id], callback);
}

const createTask = (creator_id, task, callback) => {
    const options = [
        task.title,
        task.description,
        task.executor_id,
        task.priority,
        task.deadline,
        new Date().getTime(),
        creator_id
    ];
    connection.get(createTaskQuery, options, (err, task) => {
        callback(err, task);
    });
}

module.exports = {
    getTasks,
    getTaskById, 
    deleteTask,
    createTask
};