import * as type from "./Types"
import initialState from "./State"

interface IEnterpriseAction {
    type: string,
    payload: any
}

export default function enterpriseReducer(state = initialState, action: IEnterpriseAction) {
    switch (action.type) {
        case type.GET_ENTERPRISES_FULFILLED:
            return {
                ...state,
                enterprises: action.payload
            }
        case type.GET_ENTERPRISES_REJECTED:
            return {
                ...state,
                errorEnterprises: action.payload
            }
        case type.GET_ENTERPRISE_BY_ID_FULFILLED:
            return {
                ...state,
                enterprise: action.payload
            }
        case type.GET_ENTERPRISE_BY_ID_REJECTED:
            return {
                ...state,
                errorEnterprise: action.payload
            }
        default:
            return state
    }
}