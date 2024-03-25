import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStates';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const userObject = action.payload;
      state.email = userObject.email ?? state.email;
      state.firstName = userObject.firstName ?? state.firstName;
      state.lastName = userObject.lastName ?? state.lastName;
    },

    logout: (state) => {
      state.token = '';
      state.firstName = '';
      state.lastName = '';
    },

    setRemember: (state, action) => {
      state.remember = action.payload;
    },

    setToken: (state, action) => {
      state.token += action.payload;
    },
  },
});

export const { logout, setToken, setRemember, updateUser } = userSlice.actions;

export default userSlice.reducer;
