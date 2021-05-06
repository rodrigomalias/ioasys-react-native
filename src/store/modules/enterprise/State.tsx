export interface IEnterpriseReducer {
    getEnterpriseById: Function,
    getEnterprises: Function,
    enterprise: any,
    enterprises: Array<any>,
    errorEnterprises: any,
    errorEnterprise: any,
}

const enterprise = {} as any
const enterprises = [] as any
const errorEnterprise = {} as any
const errorEnterprises = {} as any

const initialState: IEnterpriseReducer = {
    getEnterpriseById: () => {},
    getEnterprises: () => {},
    enterprise: enterprise,
    enterprises: enterprises,
    errorEnterprise: errorEnterprise,
    errorEnterprises: errorEnterprises,
}

export default initialState