export interface ILoginReducer {
    login: any,
    postSignIn: Function,
    errorLogin: any,
}

const login = {} as any

const initialState: ILoginReducer = {
    login: login,
    errorLogin: {},
    postSignIn: () => {},
}

export default initialState