export const RESOLVE_POLICY = 'RESOLVE_POLICY'
export const REJECT_POLICY = 'REJECT_POLICY'
export const SUBMIT_REQUEST = 'SUBMIT_REQUEST'

export const policyConfirm = (form, text) => dispatch => {
    if (form) {
        dispatch({type: RESOLVE_POLICY, payload: text, form})
    } else {
        dispatch({type: REJECT_POLICY})
    }
}

export const submitRequest = (requestType) => dispatch => {
    dispatch({type: SUBMIT_REQUEST, payload: requestType})
}
