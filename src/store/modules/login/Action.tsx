import { apiRequest } from "../../Api"

import * as type from "./Types"

const postSignIn = () => {
    console.log("postSignIn")
    return apiRequest({
        url: "/users/auth/sign_in",
        method: "POST",
        data: {
            email: "testeapple@ioasys.com.br",
            password: "12341234",
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

const setSaveHeader = (header:any) => {
    return {
        type: type.SET_SAVE_HEADER,
        header: header
    }
}

export { postSignIn, setSaveHeader }