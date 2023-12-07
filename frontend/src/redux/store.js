import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as blogReducer } from "./blog/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    authReducer,
    blogReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));