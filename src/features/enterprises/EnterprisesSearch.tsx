import * as React from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { firstLetter, translation } from "../../utils"
import { colors } from "../../colors"
import { Picker } from "@react-native-picker/picker"
import { enterpriseTypes, IEnterpriseType } from "./Enterprises.utils"
import { Icon } from "react-native-elements"

interface IEnterpriseSearch {
    callback: Function
}

export const EnterprisesSearch = (props: IEnterpriseSearch) => {
    const { callback } = props
    const [ name, setName ] = React.useState("")
    const [ type, setType ] = React.useState(0)

    const handleSearch = React.useCallback(() => {

        const typeFilter = type === 0 ? null : type

        callback(typeFilter, name)
    }, [ callback, name, type ])

    return (
        <View style={styles.containerHeader}>
            <View style={styles.inputView}>
                <Picker
                    testID={"test_enterprises_search_picker"}
                    selectedValue={type}
                    style={styles.input}
                    onValueChange={(itemValue: React.SetStateAction<number>) => setType(itemValue)}
                >
                    <Picker.Item label={firstLetter(translation("type"))} value={0} />
                    {enterpriseTypes.map((enterpriseType: IEnterpriseType) => {
                        return (
                            <Picker.Item
                                label={enterpriseType.typeName}
                                value={enterpriseType.type}
                                key={enterpriseType.type} />
                        )
                    })}
                </Picker>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    testID={"test_enterprises_search_input"}
                    value={name}
                    style={styles.input}
                    autoCompleteType={"off"}
                    placeholder={firstLetter(translation("name"))}
                    onChangeText={(name) => setName(name)}/>
            </View>
            <TouchableOpacity
                testID={"test_enterprises_search_button"}
                style={styles.searchButton}
                onPress={handleSearch}>
                <Text style={styles.searchButtonText}>
                    <Icon
                        name='search'
                        type='font-awesome'
                        size={20}
                        color={colors.whiteBackground}/>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        padding: 5,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: colors.darkGray,
        borderBottomWidth: 0.5,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.whiteBackground,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
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