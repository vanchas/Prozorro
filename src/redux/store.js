import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";

export const store = createStore(
    combineReducers({
        app: reducer
    })
)

// if (!JSON.parse(localStorage.getItem('pro-conf'))) {
//     store.dispatch(policyConfirm(true, ''))
// }
