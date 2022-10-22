const PORT = process.env.PORT || 8080;
const DB_PATH = process.env.DB_PATH || '/Users/matvej/Desktop/hackathon_2022/server/src/data/hackathon.db';
const JWT_KEY = process.env.JWT_KEY || '35vt4wtyc4redt';

module.exports = {
    PORT,
    DB_PATH,
    JWT_KEY,
};
