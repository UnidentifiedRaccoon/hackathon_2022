const selectAllUsersQuery = `SELECT * FROM users`;

const selectAllTasksQuery = `SELECT * FROM tasks`;
const selectTaskByIdQuery = `SELECT * FROM tasks WHERE id = ?`;
const deleteTaskByIdQuery = `DELETE FROM tasks WHERE id = ?`;

module.exports = {
    selectAllUsersQuery,
    selectAllTasksQuery,
    selectTaskByIdQuery,
    deleteTaskByIdQuery,
}
