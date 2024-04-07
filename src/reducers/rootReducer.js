import { combineReducers } from "@reduxjs/toolkit";
import tokenReducer from "../reducers/tokenSlice";
import getUserReducer from "./getUserReducer";

export default combineReducers({
    token: tokenReducer,
    getUser: getUserReducer, 

}) 