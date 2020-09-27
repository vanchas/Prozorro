import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import {policyConfirm} from "./actions";

export const store = createStore(
    combineReducers({
        app: reducer
    })
)

// setTimeout(() => {
//     if (!JSON.parse(localStorage.getItem('pro-conf'))) {
//         store.dispatch(policyConfirm(true, ''))
//     }
// }, 1000)
