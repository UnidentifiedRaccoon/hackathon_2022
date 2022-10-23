import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'user/setUser', async(evt,{dispatch}) => {
    const response = await fetch('http://507215.msk-kvm.ru/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(evt),
    });
    const json = await response.json();
    dispatch(userSlice.actions.setUser({ data: json.data}));
  }
);

export const regUser = createAsyncThunk(
  'user/regUser', async(evt,{dispatch}) => {
    const response = await fetch('http://507215.msk-kvm.ru/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(evt),
    });

    const json = await response.json();
    dispatch(userSlice.actions.setUser({json}));
  }
);

const initialState = {
  name: null,
  surname: null,
  token: null,
  id: null,
  email: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.first_name;
      state.name = action.payload.last_name;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state, _) => {
      state.name = null;
      state.name = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const {set, remove} = userSlice.actions;
export default userSlice;
