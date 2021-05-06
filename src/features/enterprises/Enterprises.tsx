import { IEnterprise } from "models/enterprise/Ienterprise"
import React, { useEffect } from "react"
import { Text, View } from "react-native"
import initialState, { IEnterpriseReducer } from "../../store/modules/enterprise/State"

export const Enterprises = (props: IEnterpriseReducer) => {
    const { getEnterprises, enterprises } = props

    useEffect(() => {
        getEnterprises()
    }, [])
    return (
        <View>
            <Text>enterprise</Text>
            {enterprises.length > 0 && enterprises.map((enterprise: IEnterprise, key) => {
                console.log("enterprise", enterprise)
                return (
                    <View key={key}>
                        <Text>
                            {`${enterprise.enterprise_name}`}
                        </Text>
                    </View>
                )
            })}
        </View>
    )
}
