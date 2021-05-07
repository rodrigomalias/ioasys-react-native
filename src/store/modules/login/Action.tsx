import { ILogin } from "models/login/ILogin"
import { translation, firstLetter } from "../../../utils"
import { apiRequest } from "../../Api"

import * as type from "./Types"

interface IPostSignInParams {
    email: string,
    password: string,
}

const postSignIn = (params: IPostSignInParams) => {
    return apiRequest({
        url: "/users/auth/sign_in",
        method: "POST",
        data: {
            email: params.email,
            password: params.password,
        },
        onSuccess: (data: ILogin) => {
            console.log("data", data)
            return {
                type: type.POST_SIGN_IN_FULFILLED,
                payload: data,
            }
        },
        onFailure: () => {
            const error = firstLetter(translation("login.error"))
            return {
                type: type.POST_SIGN_IN_REJECTED,
                payload: error,
            }
        }
    })
}

export { postSignIn }