import * as Model from "../../../models/enterprise/EnterpriseModel"
import { apiRequest } from "../../Api"
import { translation, firstLetter } from "../../../utils"

import * as type from "./Types"

const getEnterprises = () => {
    return apiRequest({
        url: "/enterprises",
        method: "GET",
        onSuccess: (data: Model.IEnterprisesData) => {
            return {
                type: type.GET_ENTERPRISES_FULFILLED,
                payload: data.enterprises
            }
        },
        onFailure: () => {
            const error = firstLetter(translation("enterprise.error"))
            return {
                type: type.GET_ENTERPRISES_REJECTED,
                payload: error,
            }
        }
    })
}

const getEnterpriseById = (params: Model.IEnterpriseByIdParams) => {
    return apiRequest({
        url: `/enterprises/${params.enterpriseId}`,
        method: "GET",
        onSuccess: (data: Model.IEnterpriseData) => {
            return {
                type: type.GET_ENTERPRISE_BY_ID_FULFILLED,
                payload: data.enterprise,
            }
        },
        onFailure: () => {
            const error = firstLetter(translation("enterprise.error"))
            return {
                type: type.GET_ENTERPRISE_BY_ID_REJECTED,
                payload: error,
            }
        }
    })
}

const getEnterprisesNameOrType = (params: Model.IEnterpriseNameOrTypParams) => {
    return apiRequest({
        url: "/enterprises",
        method: "GET",
        data: {
            name: params.name,
            enterprise_types: params.type
        },
        onSuccess: (data: Model.IEnterprisesData) => {
            return {
                type: type.GET_ENTERPRISES_NAME_OR_TYPE_FULFILLED,
                payload: data.enterprises,
            }
        },
        onFailure: () => {
            const error = firstLetter(translation("enterprise.error"))
            return {
                type: type.GET_ENTERPRISES_NAME_OR_TYPE_REJECTED,
                payload: error,
            }
        }
    })
}

export { getEnterprises, getEnterpriseById, getEnterprisesNameOrType }