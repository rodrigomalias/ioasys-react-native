import { Method } from "axios"

const API = "API"
const API_START = "API_START"
const API_END = "API_END"
const ACCESS_DENIED = "ACCESS_DENIED"
const API_ERROR = "API_ERROR"

const apiStart = () => {
    return {
        type: API_START,
    }
}

const apiEnd = () => {
    return {
        type: API_END,
    }
}

const accessDenied = (url: string) => ({
    type: ACCESS_DENIED,
    payload: {
        url
    }
})

const apiError = (error: string) => ({
    type: API_ERROR,
    error: error
})

export interface IApiRequest {
    /**
    * API url to axios request
    */
    url: string,
    /**
    * API method. Defaut is GET
    */
    method: Method,
    /**
    * Params to pass to API, ex: ids, object, arrays...
    */
    data?: any,
    /**
    * Function to receive data when request is success
    */
    onSuccess: Function,
    /**
    * Function to receive data when request is failed
    */
    onFailure?: Function,
    /**
    * Boolean to display loadingBar and loadingSpinner when requesting. Default is true
    */
    displayLoading?: boolean
}

const apiRequest = ({
    url = "",
    method = "GET",
    data = {},
    onSuccess = (_data: unknown) => {},
    onFailure = (_data: unknown) => {},
    displayLoading = true,
}: IApiRequest) => {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            onSuccess,
            onFailure,
            displayLoading
        }
    }
}

export { apiRequest, apiError, accessDenied, apiEnd, apiStart, }
export { API, API_START, API_END, ACCESS_DENIED, API_ERROR, }
