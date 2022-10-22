const { signUp, signIn } = require("./controllers/auth.controller");
const { getTaskById, getAllTasks } = require("./controllers/task.controller");
const { checkAuth } = require('./util/checkAuth');


const router = (app) => {
    app.post('/reg', signUp);
    app.post('/auth', signIn);

    app.use(checkAuth);

    app.get('/task', getAllTasks);
    app.get('/task/:id', getTaskById);
};

module.exports = {
    router
};
