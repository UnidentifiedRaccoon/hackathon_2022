const { connection } = require("../connection");

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
    ) VALUES (?, ?, ?, ?, ?, ?, ?);`;


const getTasks = (callback) => {
    connection.all(selectAllTasksQuery, (err, rows) => {
        let tasksLoaded = 0;

        rows.forEach(r => {
            getPoints(r.id, (err, points) => {
                tasksLoaded++;
                r.points = points;
            });
            if (tasksLoaded === rows.length) {
                callback(err, rows);
            }
        })
    });
}
    
const getTaskById = (id, callback) => {
    connection.get(selectTaskByIdQuery, [id], callback);
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
    connection.run(createTaskQuery, options, (err) => {
        callback(err);
    });
}

module.exports = {
    getTasks,
    getTaskById, 
    deleteTask,
    createTask
};