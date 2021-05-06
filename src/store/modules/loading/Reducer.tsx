
import * as type from "./Types"
import initialState from "./State"

interface ILoadingAction {
    type: string,
    isLoadingSpinner: boolean
}

export default function isLoadingReducer(state = initialState, action: ILoadingAction) {
    switch (action.type) {
        case type.SET_IS_LOADING_SPINNER:
            return {
                ...state,
                isLoadingSpinner: action.isLoadingSpinner,
            }
        default:
            return state
    }
}