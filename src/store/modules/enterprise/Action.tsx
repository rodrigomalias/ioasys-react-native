import { IEnterprise } from "models/enterprise/Ienterprise"
import { apiRequest } from "../../Api"

import * as type from "./Types"

interface IEnterpriseData { 
    enterprises: Array<IEnterprise>
}
const getEnterprises = () => {
    return apiRequest({
        url: `/enterprises`,
        method: "GET",
        onSuccess: (data: IEnterpriseData) => {
            return {
                type: type.GET_ENTERPRISES_FULFILLED,
                payload: data.enterprises
            }
        },
        onFailure: (error: any) => {
            return {
                type: type.GET_ENTERPRISES_REJECTED,
                payload: error,
            }
        }
    })
}

const getEnterpriseById = (params: any) => {
    return apiRequest({
        url: `/enterprises/${params.id_enterprise}`,
        method: "GET",
        onSuccess: (data: any) => {
            return {
                type: type.GET_ENTERPRISE_BY_ID_FULFILLED,
                payload: data,
            }
        },
        onFailure: (error: any) => {
            return {
                type: type.GET_ENTERPRISE_BY_ID_REJECTED,
                payload: error,
            }
        }
    })
}

export { getEnterprises, getEnterpriseById }