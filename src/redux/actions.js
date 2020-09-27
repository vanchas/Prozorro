export const RESOLVE_POLICY = 'RESOLVE_POLICY'
export const REJECT_POLICY = 'REJECT_POLICY'


export const policyConfirm = (value, text) => {
    if (value) {
        return {type: RESOLVE_POLICY, payload: text}
    } else {
        return {type: REJECT_POLICY, payload: text}
    }
}
