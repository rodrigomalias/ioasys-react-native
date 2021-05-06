import LoadingSpinner from "../../components/LoadingSpinner"
import { IEnterprise } from "models/enterprise/Ienterprise"
import * as React from "react"
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native"
import { hasObject, hasArray } from "../../utils"
import initialState, { IEnterpriseReducer } from "../../store/modules/enterprise/State"
import { EnterprisesItem } from "./EnterprisesItem"

export const Enterprises = (props: IEnterpriseReducer) => {
    const { getEnterprises, enterprises, errorEnterprises } = props
    const [ loading, setLoading ] = React.useState(true)

    React.useEffect(() => {
        getEnterprises()
    }, [ getEnterprises ])

    React.useEffect(() => {
        if (hasArray(enterprises) || hasObject(errorEnterprises)) {
            setLoading(false)
        }
    }, [ enterprises, errorEnterprises ])

    const _keyExtractor = (item: IEnterprise, index: number) => index.toString()

    const _renderItem = ({ item: enterprise }: ListRenderItemInfo<IEnterprise>) => {
        return (
            <EnterprisesItem enterprise={enterprise}/>
        )
    }

    return (
        <>
            {loading && !hasArray(enterprises) ? (
                <View style={styles.loadingContainer}>
                    <LoadingSpinner loading={loading}/>
                </View>
            ) : (
                <FlatList
                    data={ enterprises }
                    extraData={ enterprises.length }
                    keyExtractor={ _keyExtractor }
                    renderItem={ _renderItem }
                    ListEmptyComponent={
                        <View>
                            <Text>Nenhuma empresa encontrada</Text>
                        </View>
                    }/>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        marginTop: 100,
    },
})