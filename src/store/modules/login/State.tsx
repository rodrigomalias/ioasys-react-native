import { ILogin } from "../../../models/login/ILogin"

export interface ILoginReducer {
    login: ILogin,
    postSignIn: Function,
    errorLogin: string | null,
}

const login = {} as any

const initialState: ILoginReducer = {
    login: login,
    errorLogin: null,
    postSignIn: () => {},
}

export default initialState