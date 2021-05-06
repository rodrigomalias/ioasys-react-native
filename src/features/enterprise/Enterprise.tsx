import * as React from "react"
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native"
import { hasObject, hasArray } from "../../utils"
import initialState, { IEnterpriseReducer } from "../../store/modules/enterprise/State"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

export const Enterprise = (props: IEnterpriseReducer) => {
    const { getEnterpriseById, enterprise, errorEnterprise } = props

    const route: RouteProp<{ params: { enterpriseId: number } }, "params"> = useRoute()
    const [ loading, setLoading ] = React.useState(true)

    console.log("teste", enterprise)
    React.useEffect(() => {
        const id_enterprise = route.params?.enterpriseId
        getEnterpriseById({ id_enterprise })
    }, [ getEnterpriseById, route.params ])

    return (
        <>

        </>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        marginTop: 100,
    },
})