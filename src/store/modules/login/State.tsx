export interface ILoginReducer {
    login: any,
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