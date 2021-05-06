import { apiRequest } from "../../Api"

import * as type from "./Types"

const getEnterprises = (params: any) => {
    console.log("getEnterprises")
    return apiRequest({
        url: `/enterprises`,
        method: "GET",
        onSuccess: (data: any) => {
            return {
                type: type.GET_ENTERPRISES_FULFILLED,
                payload: data,
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