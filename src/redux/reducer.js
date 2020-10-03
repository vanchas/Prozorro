import {REJECT_POLICY, RESOLVE_POLICY, SUBMIT_REQUEST} from "./actions";

const initialState = {
    policyConfirm: null,
    modalText: '',
    submitRequest: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case RESOLVE_POLICY:
            return {...state, policyConfirm: action.form, modalText: action.payload}

        case REJECT_POLICY:
            return {...state, policyConfirm: null, modalText: ''}

        case SUBMIT_REQUEST:
            return {...state, submitRequest: action.payload}

        default:
            return state;
    }
}
