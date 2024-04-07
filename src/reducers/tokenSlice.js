import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'), 
  isConnected: localStorage.getItem('token') ? true : false,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    SET_TOKEN(state, action) {
      state.token = action.payload;
      state.isConnected = true;
      localStorage.setItem('token', action.payload); 
    },
    CLEAR_TOKEN(state) {
      state.token = null;
      state.isConnected = false;
      localStorage.removeItem('token');
    },
  },
});

export const { SET_TOKEN, CLEAR_TOKEN } = tokenSlice.actions;
export default tokenSlice.reducer;
