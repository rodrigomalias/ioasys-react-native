import LoadingSpinner from "../../components/LoadingSpinner"
import { IEnterprise } from "models/enterprise/Ienterprise"
import * as React from "react"
import { FlatList, ListRenderItemInfo, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { hasObject, hasArray, translation } from "../../utils"
import { IEnterpriseReducer } from "../../store/modules/enterprise/State"
import { EnterprisesItem } from "./EnterprisesItem"
import { colors } from "../../colors"
import { Picker } from "@react-native-picker/picker"
import { enterpriseTypes, IEnterpriseType } from "./Enterprise.utils"
import { Icon } from "react-native-elements"
import { ILoadingReducer } from "../../store/modules/loading/State"

export const Enterprises = (props: IEnterpriseReducer & ILoadingReducer) => {
    const { getEnterprises, enterprises, errorEnterprises, getEnterprisesNameOrType, isLoadingSpinner } = props
    const [ loading, setLoading ] = React.useState(true)
    const [ name, setName ] = React.useState("")
    const [ type, setType ] = React.useState("")
    console.log("isLoadingSpinner", isLoadingSpinner)
    React.useEffect(() => {
        getEnterprises()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // React.useEffect(() => {
    //     if (reload) {
    //         setLoading(true)
    //     }
    // }, [ reload ])

    React.useEffect(() => {
        if (hasArray(enterprises) || hasObject(errorEnterprises)) {
            // console.log("entrou aqui")
            setLoading(false)
        }
    }, [ enterprises, errorEnterprises ])

    React.useEffect(() => {
        if (!hasArray(enterprises) || hasObject(errorEnterprises)) {
            // console.log("entrou aqui aleluia")
            setLoading(false)
        }
    }, [ enterprises, enterprises.length, errorEnterprises ])

    console.log("enterprises", enterprises.length)
    const _keyExtractor = (item: IEnterprise, index: number) => index.toString()

    const _renderItem = ({ item: enterprise }: ListRenderItemInfo<IEnterprise>) => {
        return (
            <EnterprisesItem enterprise={enterprise}/>
        )
    }

    const handleSearch = React.useCallback(() => {
        setLoading(true)
        getEnterprisesNameOrType({ type, name })
    }, [ getEnterprisesNameOrType, name, type ])

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.inputView}>
                    <Picker
                        selectedValue={type}
                        style={styles.input}
                        onValueChange={(itemValue: React.SetStateAction<string>) => setType(itemValue)}
                    >
                        <Picker.Item label={translation("type")} value="" />
                        {enterpriseTypes.map((enterpriseType: IEnterpriseType) => {
                            return (
                                <Picker.Item label={enterpriseType.typeName} value={enterpriseType.type} key={enterpriseType.type} />
                            )
                        })}
                    </Picker>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        value={name}
                        style={styles.input}
                        autoCompleteType={"off"}
                        placeholder={translation("name")}
                        onChangeText={(name) => setName(name)}/>
                </View>
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>
                        <Icon
                            name='search'
                            type='font-awesome'
                            size={20}
                            color={colors.whiteBackground}/>
                    </Text>
                </TouchableOpacity>
            </View>
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

    containerHeader: {
        padding: 5,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: colors.darkGray,
        borderWidth: 0.5,
        flexDirection: "row",
        justifyContent: "center",
    },

    searchButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.primaryDark,
        marginLeft: 10,
        marginRight: 10,
        textAlign: "center",
        justifyContent: "center",
    },

    searchButtonText: {
        alignSelf: "center",
        color: colors.white,
    },

    inputView: {
        flex: 1,
        height: 45,
        justifyContent: "center",
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: colors.white,
        margin: 5,
    },

    input: {
        width: "100%",
    },
})