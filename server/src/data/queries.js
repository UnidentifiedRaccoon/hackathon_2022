const selectAllUsersQuery = `SELECT * FROM users`;

const selectAllTasksQuery = `SELECT * FROM tasks`; // get all tasks
const selectTaskByIdQuery = `SELECT title, description, deadline FROM tasks WHERE id = ?`; // get task by id
const deleteTaskByIdQuery = `DELETE FROM tasks WHERE id = ?`; // delete task by id
// const insertTaskQuery = `INSERT INTO tasks () VALUES`// create task



module.exports = {
    selectAllUsersQuery,
    selectAllTasksQuery,
    selectTaskByIdQuery,
    deleteTaskByIdQuery,
    // insertTaskQuery,
}
