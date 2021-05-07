import { IEnterprise } from "../../../models/enterprise/IEnterprise"

export interface IEnterpriseReducer {
    getEnterpriseById: Function,
    getEnterprisesNameOrType: Function,
    getEnterprises: Function,
    enterprise: IEnterprise,
    enterprises: Array<IEnterprise>,
    errorEnterprises: any,
    errorEnterprise: any,
    isLoadingData: boolean
}

const enterprise = {} as IEnterprise
const enterprises = [] as IEnterprise[]
const errorEnterprise = {} as any
const errorEnterprises = {} as any

const initialState: IEnterpriseReducer = {
    getEnterpriseById: () => {},
    getEnterprisesNameOrType: () => {},
    getEnterprises: () => {},
    enterprise: enterprise,
    enterprises: enterprises,
    errorEnterprise: errorEnterprise,
    errorEnterprises: errorEnterprises,
    isLoadingData: true
}

export default initialState