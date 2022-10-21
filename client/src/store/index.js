import { configureStore } from '@reduxjs/toolkit';

import boardReducer from './board';
import currentTaskReducer from './currentTask';

export default configureStore({
  reducer: {
    board: boardReducer,
    currentTask: currentTaskReducer,
  },
});