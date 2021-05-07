export interface IEnterprise {
    city: string,
    country: string,
    description: string,
    email_enterprise: string,
    enterprise_name: string,
    enterprise_type: {
        enterprise_type_name: string,
        id: number
    },
    facebook?: string,
    id: number,
    linkedin?: string,
    own_enterprise: boolean,
    phone?: string,
    photo: string,
    share_price: number,
    shares?: number,
    twitter?: string,
    value: number
}

export interface IEnterpriseReducer {
    getEnterpriseById: Function,
    getEnterprisesNameOrType: Function,
    getEnterprises: Function,
    enterprise: IEnterprise,
    enterprises: Array<IEnterprise>,
    errorEnterprises: string,
    errorEnterprise: string,
}

export interface IEnterprisesData {
    enterprises: Array<IEnterprise>
}

export interface IEnterpriseData {
    enterprise: IEnterprise
}

export interface IEnterpriseByIdParams {
    enterpriseId: number
}

export interface IEnterpriseNameOrTypParams {
    name: string,
    type: string,
}