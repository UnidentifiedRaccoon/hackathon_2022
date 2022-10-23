const { connection } = require("../connection");

const selectPointsByTaskIdQuery = `SELECT * FROM points WHERE task_id = ?;`;
const updateDonePoint = `UPDATE points SET done = ? WHERE id = ?;`;
const createPointQuery = `
    INSERT INTO points (
        label,
        task_id
    ) VALUES (?, ?);`;

// Todo, In progress, Done - enum 


const getPointsByTaskId = (task_id, callback) => {
    connection.all(selectPointsByTaskIdQuery, [task_id], callback);
};

// const updatePoint = 

const createPoint = (point, callback) => {
    const options = [point.label, point.task_id];
    connection.run(createPointQuery, options, (err) => {
        callback(err);
    });
}

const updatePoint = (id, done, callback) => {
    connection.run(updateDonePoint, [done, id], (err) => {
        callback(err);
    });

}


module.exports = {
    getPointsByTaskId,
    createPoint,
    updatePoint
};