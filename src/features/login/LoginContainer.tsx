import { connect } from "react-redux"
import { postSignIn } from "../../store/modules/login/Action"
import { appReducers } from "../../store/Store"

import { Login } from "./Login"

const loginReducerData = ({ loginReducer }: typeof appReducers) => {
    return {
        ...loginReducer,
    }
}

export default connect(loginReducerData, {
    postSignIn,
})(Login)
