import * as type from "./Types"
import initialState from "./State"

interface ILoginAction {
    type: string,
    payload: any
}

export default function loginReducer(state = initialState, action: ILoginAction) {
    switch (action.type) {
        case type.POST_SIGN_IN_FULFILLED:
            return {
                ...state,
                login: action.payload,
            }
        case type.POST_SIGN_IN_REJECTED:
            return {
                ...state,
                errorLogin: action.payload,
            }
        default:
            return state
    }
}