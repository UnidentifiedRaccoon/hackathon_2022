const { signUp } = require("./controllers/auth.controller");
const { getTaskById, getAllTasks } = require("./controllers/task.controller");

const router = (app) => {
  app.post('/auth', signUp);

  app.get('/task', getAllTasks);
  app.get('/task/:id', getTaskById);
};

module.exports = {
    router
};
