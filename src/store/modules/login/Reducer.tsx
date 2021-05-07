import * as type from "./Types"
import initialState from "./State"
import { ILogin } from "../../../models/login/LoginModel"

interface ILoginAction {
    type: string,
    payload: string | ILogin
}

export default function loginReducer(state = initialState, action: ILoginAction) {
    switch (action.type) {
        case type.POST_SIGN_IN_FULFILLED:
            return {
                ...state,
                login: action.payload,
                errorLogin: null,
            }
        case type.POST_SIGN_IN_REJECTED:
            return {
                ...state,
                errorLogin: action.payload,
            }
        default:
            return {
                ...state,
                login: {},
            }
    }
}