const { connection } = require("../connection");

const getUserByEmailQuery = `SELECT * FROM users WHERE email = ?`;
const createUserQuery = `
    INSERT INTO users(
        email,
        password,
        first_name,
        last_name
    )
    VALUES (?, ?, ?, ?)
    RETURNING *;
`;

const getUserByEmail = (email, callback) => {
    connection.get(getUserByEmailQuery, [email], (err, row) => {
        callback(err, row);
    });
}

const createUser = (user, callback) => {
    const options = [user.email, user.password, user.first_name, user.last_name];
    connection.get(createUserQuery, options, (err, row) => {
        callback(err, row);
    });
}

module.exports = {
    getUserByEmail,
    createUser,
};
