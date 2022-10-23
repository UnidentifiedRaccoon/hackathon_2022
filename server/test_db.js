const { createInsertionTpl } = require("./src/util/createInsertionTpl");
const { connection } = require("./src/data/connection");

const create_user_table = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        first_name TEXT NOT NULL,
        mid_name TEXT,
        last_name TEXT NOT NULL,
        avatar TEXT
    );
`;

const testUsers = [
    "ololosha@gmail.com", "qwerty", "Ololoshka", "Kekov",
    "ibragim_ibragimov@gmail.com", "candibober", "Ibragim", "Prekrasnoye imya"
];

const insert_user_table = `
    INSERT INTO users(
        email,
        password,
        first_name,
        last_name
    )
    VALUES${createInsertionTpl(testUsers, 4)};`;

connection.run(create_user_table, (err) => {
    if (err) { return console.error(err); }
    connection.run(insert_user_table, testUsers, err => {
        if (err) { returnconsole.error('Error:', err); }
        console.log('Successfully created users');
    })
});

const create_task_table = `
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,

        creator_id INTEGER,
        executor_id INTEGER,
        priority INTEGER,

        date_created INTEGER,
        deadline INTEGER,
        column_title TEXT,

        FOREIGN KEY (creator_id) REFERENCES users(id),
        FOREIGN KEY (executor_id) REFERENCES users(id)
    )
`;

const testTasks = [
    "TEST TITLE!!!",
    "Description!!",
    3,
    "To do",
    new Date().getTime()
]

const insert_task_table = `
    INSERT INTO tasks(
        title,
        description,
        priority,
        column_title,
        date_created
    )
    VALUES${createInsertionTpl(testTasks, 5)};`;

connection.run(create_task_table, (err) => {
    if (err) { return console.error(err); }

    connection.run(insert_task_table, testTasks, err => {
        if (err) { return console.error('Error:', err); }
        
        console.log('Successfully created tasks');
    })
});


const create_point_table = `
        CREATE TABLE IF NOT EXISTS points (
            id INTEGER PRIMARY KEY,
            label TEXT,
            task_id INTEGER,
            done BOOLEAN DEFAULT 0 NOT NULL CHECK (done IN (0, 1)),

            FOREIGN KEY (task_id) REFERENCES tasks(id)
        )
`;

const testPoints = [
    "LABEL!!!!!!!!!!",
    1
]


const insert_point_table = `
    INSERT INTO points(
        label,
        task_id
    ) VALUES${createInsertionTpl(testPoints, 2)};`;

connection.run(create_point_table, (err) => {
        if (err) { return console.error(err); }
        connection.run(insert_point_table, testPoints, err => {
            if (err) { return console.error('Error:', err); }
            console.log('Successfully created points');
        })
    });
