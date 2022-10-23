const { signUp, signIn } = require("./controllers/auth.controller");
const { checkAuth } = require('./util/checkAuth');

const { getTaskById, getAllTasks, createTask, deleteTask } = require("./controllers/task.controller");
const { getPointsByTaskId, createPoint, updatePoint } = require("./controllers/point.controller");

const router = (app) => {
    app.post('/reg', signUp);
    app.post('/auth', signIn);

    app.use(checkAuth);

    app.get('/point/:task_id', getPointsByTaskId);

    app.post('/point', createPoint);

    app.patch('/point/:id', updatePoint)
    app.get('/task/:id', getTaskById);
    app.get('/task', getAllTasks);

    app.post('/task', createTask);
    
    app.delete('/task/:id', deleteTask);
};

module.exports = {
    router
};
