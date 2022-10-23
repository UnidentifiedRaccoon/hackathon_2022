import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'user/setUser', async({evt, navigate},{dispatch}) => {
    const response = await fetch('http://507215.msk-kvm.ru/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(evt),
    });
    if (response.ok) {
      const json = await response.json();
      dispatch(userSlice.actions.setUser(json.data));
      navigate('/');
    }
  }
);

export const regUser = createAsyncThunk(
  'user/regUser', async({evt, navigate},{dispatch}) => {
    const event = {
      password: evt.password,
      email: evt.email,
      first_name: evt.firstname,
      last_name: evt.surname,
    };
    const response = await fetch('http://507215.msk-kvm.ru/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(event),
    });
    if (response.ok) {
      const json = await response.json();
      dispatch(userSlice.actions.setUser(json.data));
      navigate('/');
    }
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
      state.surname = action.payload.last_name;
      state.token = action.payload.token;
      state.email = action.payload.email;
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

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
