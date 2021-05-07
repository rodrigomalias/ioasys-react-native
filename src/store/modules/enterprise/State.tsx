import * as Model from "../../../models/enterprise/EnterpriseModel"

const enterprise = {} as Model.IEnterprise
const enterprises = [] as Model.IEnterprise[]
const errorEnterprise = ""
const errorEnterprises = ""

const initialState: Model.IEnterpriseReducer = {
    getEnterpriseById: () => {},
    getEnterprisesNameOrType: () => {},
    getEnterprises: () => {},
    enterprise: enterprise,
    enterprises: enterprises,
    errorEnterprise: errorEnterprise,
    errorEnterprises: errorEnterprises,
}

export default initialState