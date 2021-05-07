import * as type from "./Types"
import initialState from "./State"
import { IEnterprise } from "../../../models/enterprise/IEnterprise"

interface IEnterpriseAction {
    type: string,
    payload: Array<IEnterprise> | IEnterprise | string
}

export default function enterpriseReducer(state = initialState, action: IEnterpriseAction) {
    switch (action.type) {
        case type.GET_ENTERPRISES_FULFILLED:
            return {
                ...state,
                enterprises: action.payload,
            }
        case type.GET_ENTERPRISES_REJECTED:
            return {
                ...state,
                errorEnterprises: action.payload,
            }
        case type.GET_ENTERPRISE_BY_ID_FULFILLED:
            return {
                ...state,
                enterprise: action.payload,
            }
        case type.GET_ENTERPRISE_BY_ID_REJECTED:
            return {
                ...state,
                errorEnterprise: action.payload,
            }
        case type.GET_ENTERPRISES_NAME_OR_TYPE_FULFILLED:
            return {
                ...state,
                enterprises: action.payload,
            }
        case type.GET_ENTERPRISES_NAME_OR_TYPE_REJECTED:
            return {
                ...state,
                errorEnterprises: action.payload,
            }
        default:
            return state
    }
}