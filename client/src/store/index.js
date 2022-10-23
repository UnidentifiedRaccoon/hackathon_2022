import { configureStore } from '@reduxjs/toolkit';

import boardReducer from './board';
import currentTaskReducer from './currentTask';
import userReducer from './user';

export default configureStore({
  reducer: {
    board: boardReducer,
    currentTask: currentTaskReducer,
    user: userReducer,
  },
});
