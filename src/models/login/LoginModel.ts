import { IEnterprise } from "../enterprise/EnterpriseModel"

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

export interface ILoginReducer {
    login: ILogin,
    postSignIn: Function,
    errorLogin: string | null,
}

export interface IPostSignInParams {
    email: string,
    password: string,
}