import { connect } from "react-redux"
import { getEnterpriseById } from "../../store/modules/enterprise/Action"
import { appReducers } from "../../store/Store"

import { Enterprise } from "./Enterprise"

const enterpriseReducerData = ({ enterpriseReducer }: typeof appReducers) => {
    return {
        ...enterpriseReducer,
    }
}

export default connect(enterpriseReducerData, {
    getEnterpriseById,
})(Enterprise)
