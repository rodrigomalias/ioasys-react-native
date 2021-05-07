import LoadingSpinner from "../../components/LoadingSpinner"
import { IEnterprise } from "models/enterprise/Ienterprise"
import * as React from "react"
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native"
import { hasObject, hasArray } from "../../utils"
import { IEnterpriseReducer } from "../../store/modules/enterprise/State"
import { EnterprisesItem } from "./EnterprisesItem"
import { colors } from "../../colors"

interface IEnterpriseSearch {
    callback: Function
}

export const EnterpriseSearch = (props: IEnterpriseSearch) => {
    const { callback } = props
    const [ loading, setLoading ] = React.useState(true)

    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        backgroundColor: colors.darkGray,
    },
})