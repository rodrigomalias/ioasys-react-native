import { IEnterprise } from "../../../models/enterprise/IEnterprise"

export interface IEnterpriseReducer {
    getEnterpriseById: Function,
    getEnterprisesNameOrType: Function,
    getEnterprises: Function,
    enterprise: IEnterprise,
    enterprises: Array<IEnterprise>,
    errorEnterprises: string,
    errorEnterprise: string,
}

const enterprise = {} as IEnterprise
const enterprises = [] as IEnterprise[]
const errorEnterprise = ""
const errorEnterprises = ""

const initialState: IEnterpriseReducer = {
    getEnterpriseById: () => {},
    getEnterprisesNameOrType: () => {},
    getEnterprises: () => {},
    enterprise: enterprise,
    enterprises: enterprises,
    errorEnterprise: errorEnterprise,
    errorEnterprises: errorEnterprises,
}

export default initialState