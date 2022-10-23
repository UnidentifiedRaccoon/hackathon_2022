const { signUp } = require("./controllers/auth.controller");
const { getTaskById, getAllTasks, createTask, deleteTask } = require("./controllers/task.controller");
const { getPointsByTaskId, createPoint, updatePoint } = require("./controllers/point.controller");

const router = (app) => {
  app.post('/auth', signUp);

  app.get('/task', getAllTasks);
  app.get('/task/:id', getTaskById);

  app.post('/task', createTask);
  
  app.delete('/task/:id', deleteTask);

  app.get('/point/:task_id', getPointsByTaskId);

  app.post('/point', createPoint);

  app.patch('/point/:id', updatePoint)
};

module.exports = {
    router
};
