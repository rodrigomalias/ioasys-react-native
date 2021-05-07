import { connect } from "react-redux"
import { postSignIn } from "../../store/modules/login/Action"
import { appReducers } from "../../store/Store"

import { Login } from "./Login"

const loginReducerData = ({ loginReducer, isLoadingReducer }: typeof appReducers) => {
    return {
        ...loginReducer,
        ...isLoadingReducer,
    }
}

export default connect(loginReducerData, {
    postSignIn,
})(Login)
