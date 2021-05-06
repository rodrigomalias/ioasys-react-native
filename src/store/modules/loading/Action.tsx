import * as type from "./Types"

const setIsLoadingSpinner = (isLoadingSpinner:boolean) => {
    return {
        type: type.SET_IS_LOADING_SPINNER,
        isLoadingSpinner: isLoadingSpinner
    }
}

export { setIsLoadingSpinner }