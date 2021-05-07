import axios, { Method } from "axios"
import { settings } from "../settings"
import { Dispatch, MiddlewareAPI, AnyAction } from "redux"

import { accessDenied, API, apiEnd, apiError, apiStart, API_ERROR } from "./Api"
import { setIsLoadingSpinner } from "./modules/loading/Action"
import { LoginStorage } from "../storage/LoginStorage"

interface IHeader {
    "access-token": string
    "client": string
    "uid": string
}
interface IApiMiddlewareAction {
    type: string,
    error: any,
    payload: {
        url: string;
        method: Method;
        data: any;
        onSuccess: Function;
        onFailure: Function;
        headers: any;
        displayLoading: boolean,
    }
}

const apiMiddleware = ({ dispatch }: MiddlewareAPI<Dispatch<AnyAction>>) => (next: (arg0: any) => void) => async (action: IApiMiddlewareAction) => {
    if (action) {

        next(action)

        if (action.type !== API) {
            return
        }
        let {
            url,
            method,
            data,
            onSuccess,
            onFailure,
            headers,
            displayLoading,
        } = action.payload

        const dataOrParams = [ "GET", "DELETE" ].includes(method) ? "params" : "data"
        const loginStorage = new LoginStorage()

        const header = await loginStorage.getHeader()

        axios.defaults.baseURL = settings.services.API_SERVICE
        axios.defaults.headers.common["Content-Type"] = "application/json charset=utf-8"
        if (header && url !== settings.auth) {
            axios.defaults.headers.common["access-token"] = header["access-token"]
            axios.defaults.headers.common["client"] = header["client"]
            axios.defaults.headers.common["uid"] = header["uid"]
        }

        const loading = (loadingSpinner: AnyAction) => {
            if (displayLoading) {
                dispatch(loadingSpinner)
            }
        }

        const saveHeader = async (newHeader: IHeader) => {
            loginStorage.putHeader(newHeader)
        }

        loading(setIsLoadingSpinner(true))
        dispatch(apiStart())
        axios
            .request({
                url,
                method,
                headers,
                [dataOrParams]: data
            })
            .then((response) => {
                const { data } = response
                if (url === settings.auth) {
                    saveHeader({
                        "access-token": response.headers["access-token"],
                        "client": response.headers["client"],
                        "uid": response.headers["uid"],
                    }).then(() => {
                        dispatch(onSuccess(data))
                    })
                } else {
                    dispatch(onSuccess(data))
                }
            })
            .catch((error) => {
                const apiErrors = error.response.status === 401 ? "" : JSON.parse(error.request.response)

                dispatch(apiError(error))
                dispatch(onFailure(apiErrors))
                loading(setIsLoadingSpinner(false))
            })
            .finally(() => {
                loading(setIsLoadingSpinner(false))
                dispatch(apiEnd())
            })
    }
}

export default apiMiddleware