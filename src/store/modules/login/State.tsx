import * as Model from "../../../models/login/LoginModel"

const login = {} as Model.ILogin

const initialState: Model.ILoginReducer = {
    login: login,
    errorLogin: null,
    postSignIn: () => {},
}

export default initialState