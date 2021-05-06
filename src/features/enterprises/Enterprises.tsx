import React, { useEffect } from "react"
import { Text, View } from "react-native"
import initialState, { IEnterpriseReducer } from "../../store/modules/enterprise/State"

export const Enterprises = (props: IEnterpriseReducer) => {
    const { getEnterprises } = props

    useEffect(() => {
        getEnterprises()
    }, [])

    return (
        <View>
            <Text>enterprise</Text>
        </View>
    )
}
