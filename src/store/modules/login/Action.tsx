import { apiRequest } from "../../Api"

import * as type from "./Types"

export interface IPostSignInParams {
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
        onSuccess: (data: any) => {
            return {
                type: type.POST_SIGN_IN_FULFILLED,
                payload: data,
            }
        },
        onFailure: (error: any) => {
            return {
                type: type.POST_SIGN_IN_REJECTED,
                payload: error,
            }
        }
    })
}

export { postSignIn }