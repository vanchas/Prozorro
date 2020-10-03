import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(
    combineReducers({
        app: reducer
    }),
    applyMiddleware(thunk)
)
