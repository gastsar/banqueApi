import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    data: null,
}

// Les actions
export const getUserProfileInfos = createAction('getUserProfileInfos');
export const updateUserFirstName = createAction('updateUserFirstName');
export const updateUserLastName = createAction('updateUserLastName');
export const resetProfile = createAction('resetUserProfileInfos');

// Le reducer
export default createReducer(initialState, (builder) => {
    builder
        .addCase(getUserProfileInfos, (state, action) => {
            if (action.payload) {
                state.data = action.payload;
            }
        })
        .addCase(updateUserFirstName, (state, action) => {
            if (state.data && action.payload) {
                state.data.firstName = action.payload;
            }
        })
        .addCase(updateUserLastName, (state, action) => {
            if (state.data && action.payload) {
                state.data.lastName = action.payload;
            }
        })
        .addCase(resetProfile, (state) => {
            state.data = initialState.data;
        });
});
