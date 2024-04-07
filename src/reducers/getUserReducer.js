import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const getUserReducer = createSlice({
  name: 'getUser',
  initialState,
  reducers: {
    GET_USER_PROFILE(state, action) {
      state.data = action.payload;
    },
    CLEAR_USER_PROFILE(state) {
      state.data =initialState.data;
    },
    UPDATE_FIRSTNAME(state, action) {
      if (state.data && action.payload) {
        state.data.firstName = action.payload;
      }
    },
    UPDATE_LASTNAME(state, action) {
      if (state.data && action.payload) {
        state.data.lastName = action.payload;
      }
    },
  },
});

export const {
  GET_USER_PROFILE,
  CLEAR_USER_PROFILE,
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
} = getUserReducer.actions;

export default getUserReducer.reducer;
