import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';

import TicketsAPI from '../backend/TicketsAPI';


export const fetchBoard = createAsyncThunk(
  'board/fetchBoard', async(_,{dispatch}) => {
    const data = await TicketsAPI.requestBoard();
    dispatch(boardSlice.actions.fetchBoard(data));
  }
);

export const updateTaskPosition = createAsyncThunk(
  'board/updateTaskPosition',
  async ({ source, destination, taskId }, {dispatch}) => {
    dispatch(boardSlice.actions.updateTaskPosition({ source, destination, taskId }));
    await TicketsAPI.updateTaskPosition( source, destination, taskId );
  }
);

export const addTask = createAsyncThunk(
  'board/addTask', async(taskData, {dispatch}) => {
    const task = {...taskData, comments: [], id: nanoid(), column: 'Todo'};
    dispatch(boardSlice.actions.addTask(task));
    await TicketsAPI.addTask(task);
  }
);

export const updateTask = createAsyncThunk(
  'board/updateTask', async(taskData, {dispatch}) => {
    dispatch(boardSlice.actions.updateTask(taskData));
    await TicketsAPI.updateTask(taskData);
  }
);

export const deleteTask = createAsyncThunk(
  'board/deleteTask', async({id, column}, {dispatch}) => {
    dispatch(boardSlice.actions.deleteTask({id, column}));
    await TicketsAPI.deleteTask(id, column);
    dispatch(fetchBoard());
  }
);

const initialState = {
  requestMeta: {},
  columns: {
    'Todo':  {id: 'Todo', taskIds: []},
    'In progress':  {id: 'In progress', taskIds: []},
    'Done':  {id: 'Done', taskIds: []},
  },
  tasks: [],
};


export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    updateTaskPosition: (state, action) => {
      const { source, destination, taskId } = action.payload;
      const sourceId = source.droppableId;
      const  destinationId = destination.droppableId;
      if (sourceId === destinationId) {
        state.columns[sourceId].taskIds.splice(source.index, 1);
        state.columns[sourceId].taskIds.splice(destination.index, 0, taskId);
      } else {
        const index = state.tasks.findIndex(task => task.id === taskId);
        state.tasks[index].column = destinationId;
        state.columns[sourceId].taskIds = state.columns[sourceId].taskIds.filter(id => id !== taskId);
        state.columns[destinationId].taskIds.splice(destination.index, 0, taskId);
      }
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      state.columns['Todo'].taskIds.push(action.payload.id);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      state.tasks[index] = action.payload;
    },
    fetchBoard: (state, action) => {
      state.tasks = action.payload.tasks;
      const columns = Object.entries(state.columns).map(([id, column]) => {
        const tasks = state.tasks.filter(task => task.column === column.id);
        const taskIds = tasks.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());;
        return  [id ,{...column, taskIds}];
      });
      state.columns = Object.fromEntries(columns);
    },
    deleteTask: (state, action) => {
      state.columns[action.payload.column].taskIds =
          state.columns[action.payload.column].taskIds.filter(t => t.id !== action.payload.id);
      state.tasks = state.tasks.filter(t => t.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
    // Work with request status while fetchBoard
      .addCase(fetchBoard.pending, (state, action) => {
        state.requestMeta.fetchBoard = { title: 'loading', operation: 'fetchBoard'};
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.requestMeta.fetchBoard = { title: 'success', operation: 'fetchBoard'};
      })
      .addCase(fetchBoard.rejected, (state, action) => {
        state.requestMeta.fetchBoard = { title: 'error', operation: 'fetchBoard'};
      })
    // Work with request status while updateTaskPosition
      .addCase(updateTaskPosition.pending, (state, action) => {
        state.requestMeta.updateTaskPosition =
            { title: 'loading', operation: `updateTaskPosition ${action.meta.arg.taskId}`};
      })
      .addCase(updateTaskPosition.fulfilled, (state, action) => {
        state.requestMeta.updateTaskPosition =
            { title: 'success', operation: `updateTaskPosition ${action.meta.arg.taskId}`};
      })
      .addCase(updateTaskPosition.rejected, (state, action) => {
        state.requestMeta.updateTaskPosition =
            { title: 'error', operation: `updateTaskPosition ${action.meta.arg.taskId}` };
      })
    // Work with request status while addTask
      .addCase(addTask.pending, (state, action) => {
        state.requestMeta.addTask = { title: 'loading', operation: `addTask ${action.meta.arg.title}`};
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.requestMeta.addTask = { title: 'success', operation: `addTask ${action.meta.arg.title}`};
      })
      .addCase(addTask.rejected, (state, action) => {
        state.requestMeta.addTask = { title: 'error', operation: `addTask ${action.meta.arg.title}`};
      })
    // Work with request status while updateTask
      .addCase(updateTask.pending, (state, action) => {
        state.requestMeta.updateTask = { title: 'loading', operation: `updateTask ${action.meta.arg.title}`};
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.requestMeta.updateTask = { title: 'success', operation: `updateTask ${action.meta.arg.title}`};
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.requestMeta.updateTask = { title: 'error', operation: `updateTask ${action.meta.arg.title}`};
      })
    // Work with request status while updateTask
      .addCase(deleteTask.pending, (state, action) => {
        state.requestMeta.deleteTask = { title: 'loading', operation: `deleteTask ${action.meta.arg.id}`};
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.requestMeta.deleteTask = { title: 'success', operation: `deleteTask ${action.meta.arg.id}`};
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.requestMeta.deleteTask = { title: 'error', operation: `deleteTask ${action.meta.arg.id}`};
      });


  },
});

// Action creators are generated for each case reducer function

export default boardSlice.reducer;

export const metaOnFetchBoard = state => state.board.requestMeta.fetchBoard;
export const metaOnUpdateTaskPosition = state => state.board.requestMeta.updateTaskPosition;
export const metaOnAddTask = state => state.board.requestMeta.addTask;
export const metaOnUpdateTask = state => state.board.requestMeta.updateTask;
export const metaOnDeleteTask = state => state.board.requestMeta.deleteTask;
export const boardSelector = state => state.board;

