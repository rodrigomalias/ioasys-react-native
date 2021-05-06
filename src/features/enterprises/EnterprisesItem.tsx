import { useNavigation } from "@react-navigation/native"
import { IEnterprise } from "models/enterprise/Ienterprise"
import * as React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface IEnterprisesItem {
    enterprise: IEnterprise
}

export const EnterprisesItem = (props: IEnterprisesItem) => {
    const { enterprise } = props
    const navigation = useNavigation()

    const imageUrl = `https://empresas.ioasys.com.br/${enterprise.photo}`

    const handleLogin = React.useCallback(() => {
        navigation.navigate("enterprise", {
            enterpriseName: enterprise.enterprise_name,
            enterpriseId: enterprise.id,
        })
    }, [ enterprise.enterprise_name, enterprise.id, navigation ])

    return (
        <TouchableOpacity onPress={handleLogin} style={styles.enterpriseContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{enterprise.enterprise_name}</Text>
                <Text style={styles.enterpriseType}>{enterprise.enterprise_type.enterprise_type_name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    enterpriseContainer: {
        flex: 1,
        margin: 5,
        height: 80,
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "white",
        borderBottomColor: "#C0C0C0",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    nameContainer: {
        flex: 1.5,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    enterpriseType: {
        fontSize: 14,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#C0C0C0",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})