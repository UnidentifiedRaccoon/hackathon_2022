import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';

import TicketsAPI from '../backend/TicketsAPI';

const initialState = {
  task: {},
  requestMeta: {},
};

export const fetchTask = createAsyncThunk('currentTask/fetchTask', async (taskId , {dispatch}) => {
  const data =  await  TicketsAPI.getTask(taskId);
  dispatch(currentTaskSlice.actions.fetchTask(data));
});

export const currentTaskSlice = createSlice({
  name: 'currentTask',
  initialState,
  reducers: {
    fetchTask: (state, action) => {
      state.task = action.payload;
    },
    addComment: (state, action) => {
      state.task.comments.unshift({...action.payload, id: nanoid()});
    },
    deleteComment: (state, action) => {
      state.task.comments  = state.task.comments.filter(c => c.id !== action.payload);
    },
  },
  extraReducers(builder) {
    // Work with request status while fetchTask
    builder
      .addCase(fetchTask.pending, (state, action) => {
        state.requestMeta.fetchTask = { title: 'loading', operation: `fetchTask ${action.meta.arg}`};
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.requestMeta.fetchTask = { title: 'success', operation: `fetchTask ${action.meta.arg}`};
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.requestMeta.fetchTask = { title: 'error', operation: `fetchTask ${action.meta.arg}`};
      });
  },
});

export default currentTaskSlice.reducer;
export const {addComment, deleteComment} = currentTaskSlice.actions;

export const metaOnFetchTask = state => state.currentTask.requestMeta.fetchTask;
export const taskSelector = state => state.currentTask.task;
