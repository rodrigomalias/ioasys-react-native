import { connect } from "react-redux"
import { getEnterprises } from "../../store/modules/enterprise/Action"
import { appReducers } from "../../store/Store"

import { Enterprises } from "./Enterprises"

const enterpriseReducerData = ({ enterpriseReducer }: typeof appReducers) => {
    return {
        ...enterpriseReducer,
    }
}

export default connect(enterpriseReducerData, {
    getEnterprises,
})(Enterprises)
