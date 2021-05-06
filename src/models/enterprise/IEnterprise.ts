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
    twitter?: string,
    value: number
}