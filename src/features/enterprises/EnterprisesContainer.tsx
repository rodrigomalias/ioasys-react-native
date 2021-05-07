import { connect } from "react-redux"
import { getEnterprises, getEnterprisesNameOrType } from "../../store/modules/enterprise/Action"
import { appReducers } from "../../store/Store"

import { Enterprises } from "./Enterprises"

const enterpriseReducerData = ({ enterpriseReducer, isLoadingReducer }: typeof appReducers) => {
    return {
        ...enterpriseReducer,
        ...isLoadingReducer,
    }
}

export default connect(enterpriseReducerData, {
    getEnterprises,
    getEnterprisesNameOrType,
})(Enterprises)
