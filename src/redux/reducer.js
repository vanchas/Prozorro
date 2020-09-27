import {REJECT_POLICY, RESOLVE_POLICY} from "./actions";

const initialState = {
    policyConfirm: false,
    modalText: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESOLVE_POLICY:
            return {...state, policyConfirm: true, modalText: action.payload}

        case REJECT_POLICY:
            return {...state, policyConfirm: false, modalText: ''}

        default:
            return state;
    }
}
