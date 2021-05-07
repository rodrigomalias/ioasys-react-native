import { IEnterprise } from "models/enterprise/Ienterprise"
import { apiRequest } from "../../Api"
import { translation, firstLetter } from "../../../utils"

import * as type from "./Types"

interface IEnterprisesData {
    enterprises: Array<IEnterprise>
}
const getEnterprises = () => {
    return apiRequest({
        url: "/enterprises",
        method: "GET",
        onSuccess: (data: IEnterprisesData) => {
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

interface IEnterpriseData {
    enterprise: IEnterprise
}
interface IEnterpriseByIdParams {
    enterpriseId: number
}
const getEnterpriseById = (params: IEnterpriseByIdParams) => {
    return apiRequest({
        url: `/enterprises/${params.enterpriseId}`,
        method: "GET",
        onSuccess: (data: IEnterpriseData) => {
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

interface IEnterpriseNameOrTypParams {
    name: string,
    type: string,
}
const getEnterprisesNameOrType = (params: IEnterpriseNameOrTypParams) => {
    return apiRequest({
        url: "/enterprises",
        method: "GET",
        data: {
            name: params.name,
            enterprise_types: params.type
        },
        onSuccess: (data: IEnterprisesData) => {
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