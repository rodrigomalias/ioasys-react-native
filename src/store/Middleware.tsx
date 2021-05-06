import axios, { Method } from "axios"
import { settings } from "../settings"
import { Dispatch, MiddlewareAPI, AnyAction } from "redux"

import { accessDenied, API, apiEnd, apiError, apiStart, API_ERROR } from "./Api"
import { setIsLoadingSpinner } from "./modules/loading/Action"
import { setSaveHeader } from "./modules/login/Action"
import { LoginStorage } from "../storage/LoginStorage"

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

const apiMiddleware = ({ dispatch }: MiddlewareAPI<Dispatch<AnyAction>>) => (next: (arg0: any) => void) => (action: IApiMiddlewareAction) => {
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
        
        // console.log("primeiro header", header)
        // const token = window.sessionStorage.token
        axios.defaults.baseURL = settings.services.API_SERVICE
        axios.defaults.headers.common["Content-Type"] = "application/json charset=utf-8"
        // axios.defaults.headers.common["access-token"] = header && header["access-token"]
        // axios.defaults.headers.common["client"] = header && header["client"]
        // axios.defaults.headers.common["uid"] = header && header["uid"]

        const services = Object.keys(settings.services).filter((item) => url.includes(item))

        if (services.length === 1) {
            const service: string = services[0]

            url = url.replace(service, settings.services[service])
        } else {
            url = settings.services.API_SERVICE + url
        }

        const loading = (loadingSpinner: AnyAction) => {
            if (displayLoading) {
                dispatch(loadingSpinner)
            }
        }

        // const saveHeader = async (newHeader: any) => {
            
        //     const loginStorage = new LoginStorage()

        //     const header = await loginStorage.getHeader()
        //     if(!header || header != newHeader) {
        //         loginStorage.putHeader(newHeader)
        //     }
        //     console.log("testeeeee", header)
        // }

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
                const {data} = response
                const header = {
                    accessToken: response.headers["access-token"],
                    client: response.headers["client"],
                    uid: response.headers["uid"],
                }
                console.log("data", data)
                console.log("headers", header)
                // saveHeader(header)
                dispatch(onSuccess(data))
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