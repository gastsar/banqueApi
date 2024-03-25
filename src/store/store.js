import { configureStore } from '@reduxjs/toolkit'
import userProfileReducer from '../reducers/userProfileReducer'
import errorReducer from '../reducers/errorReducer'
import logReducer from '../reducers/logReducer'

const store = configureStore({
    reducer: {
        logged: logReducer,
        userProfile: userProfileReducer,
        error: errorReducer
    },
    devTools: true,
});

export const RootState = store.getState
export const AppDispatch = store.dispatch

export default store
