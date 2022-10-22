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
        deadline
    ) VALUES (?, ?, ?, ?, ?);`;


const getTasks = (callback) => {
    connection.all(selectAllTasksQuery, callback);
}
    
const getTaskById = (id, callback) => {
    connection.get(selectTaskByIdQuery, [id], callback);
}

const deleteTask = (id, callback) => {
    connection.run(deleteTaskByIdQuery, [id], callback);
}

const createTask = (task, callback) => {
    const options = [task.title, task.description, task.executor_id, task.priority, task.deadline];
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