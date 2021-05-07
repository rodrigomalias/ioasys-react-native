import { IEnterprise } from "models/enterprise/IEnterprise"

export interface ILogin {
    enterprise?: IEnterprise,
    investor: {
        balance: number,
        city: string,
        country: string,
        email: string,
        first_access: boolean,
        id: number,
        investor_name: string,
        photo?: string,
        portfolio: {
            enterprises: Array<IEnterprise>,
            enterprises_number: number
        },
        portfolio_value: number,
        super_angel: boolean
    },
    success: boolean
}