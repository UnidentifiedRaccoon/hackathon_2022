const express = require('express');

const { PORT } = require('./consts');
const { conection } = require('./data/connection');
const { router } = require('./routes');

const app = express();

router(app);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

process.on('exit', () => {
    conection.close((err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Db connection closed');
    });
});
