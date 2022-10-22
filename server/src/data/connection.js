const sqlite3 = require("sqlite3").verbose();

const { DB_PATH } = require("../consts");

const connection = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

module.exports = {
  connection,
};
