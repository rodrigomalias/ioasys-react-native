import LoadingSpinner from "../../components/LoadingSpinner"
import { IEnterprise } from "models/enterprise/Ienterprise"
import * as React from "react"
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native"
import { hasObject, hasArray, translation, firstLetter } from "../../utils"
import { IEnterpriseReducer } from "../../store/modules/enterprise/State"
import { EnterprisesItem } from "./EnterprisesItem"
import { colors } from "../../colors"
import { ILoadingReducer } from "../../store/modules/loading/State"
import { EnterprisesSearch } from "./EnterprisesSearch"

export const Enterprises = (props: IEnterpriseReducer & ILoadingReducer) => {
    const { getEnterprises, enterprises, errorEnterprises, getEnterprisesNameOrType, isLoadingSpinner } = props
    const [ loading, setLoading ] = React.useState(true)

    React.useEffect(() => {
        getEnterprises()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const handleSearch = React.useCallback((type: number, name: string) => {
        setLoading(true)
        if (type != 0 || name != "") {
            getEnterprisesNameOrType({ type, name })
        } else {
            getEnterprises()
        }
    }, [ getEnterprises, getEnterprisesNameOrType ])

    return (
        <View style={styles.container}>
            <EnterprisesSearch callback={(type: number, name: string) => {
                handleSearch(type, name)
            }}/>
            {loading && isLoadingSpinner ? (
                <View style={styles.loadingContainer}>
                    <LoadingSpinner loading={loading}/>
                </View>
            ) : (
                <FlatList
                    data={ enterprises }
                    refreshing={loading}
                    extraData={ enterprises.length }
                    keyExtractor={ _keyExtractor }
                    renderItem={ _renderItem }
                    ListEmptyComponent={
                        <Text style={styles.errorMessage}>
                            {firstLetter(translation("enterprise.error"))}
                        </Text>
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteBackground,
    },
    loadingContainer: {
        marginTop: 50,
    },
    errorMessage: {
        marginTop: 20,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 17,
        textAlign: "center",
    },
})