const { createInsertionTpl } = require('./src/util/createInsertionTpl');
const { connection } = require('./src/data/connection');

const create_user_table = `
    CREATE TABLE IF NOT EXISTS users (
        USER_ID INTEGER PRIMARY KEY,
        EMAIL TEXT NOT NULL,
        PASSWORD TEXT NOT NULL,
        FIRST_NAME TEXT NOT NULL,
        MID_NAME TEXT,
        LAST_NAME TEXT NOT NULL,
        AVATAR TEXT
    );
`;

const testUsers = [
    "ololosha@gmail.com", "qwerty", "Ololoshka", "Kekov",
    "ibragim_ibragimov@gmail.com", "candibober", "Ibragim", "Prekrasnoye imya"
];

const insert_user_table = `
    INSERT INTO users(
        EMAIL,
        PASSWORD,
        FIRST_NAME,
        LAST_NAME
    )
    VALUES${createInsertionTpl(testUsers, 4)};`;

connection
    // .run('DROP TABLE users')
    .run(create_user_table)
    .run(insert_user_table, testUsers, err => {
        if (err) {
            console.error('Error:', err);
            return;
        }
        console.log('Successfully created users');
    });