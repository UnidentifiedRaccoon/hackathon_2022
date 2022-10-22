const { signUp } = require("./controllers/auth.controller");
const { getTaskById, getAllTasks, createTask, deleteTask } = require("./controllers/task.controller");

const router = (app) => {
  app.post('/auth', signUp);

  app.get('/task', getAllTasks);
  app.get('/task/:id', getTaskById);

  app.post('/task', createTask);
  
  app.delete('/task/:id', deleteTask);
};

module.exports = {
    router
};
