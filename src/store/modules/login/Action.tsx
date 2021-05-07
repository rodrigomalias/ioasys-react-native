import * as Model from "../../../models/login/LoginModel"
import { translation, firstLetter } from "../../../utils"
import { apiRequest } from "../../Api"
import * as type from "./Types"

const postSignIn = (params: Model.IPostSignInParams) => {
    return apiRequest({
        url: "/users/auth/sign_in",
        method: "POST",
        data: {
            email: params.email,
            password: params.password,
        },
        onSuccess: (data: Model.ILogin) => {
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