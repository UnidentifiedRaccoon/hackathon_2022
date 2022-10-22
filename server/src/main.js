const express = require('express');

const { PORT } = require('./consts');
const { router } = require('./routes');

const app = express();

router(app);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
