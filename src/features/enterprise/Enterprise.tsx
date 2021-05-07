import * as React from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { hasObject, translation, firstLetter } from "../../utils"
import { RouteProp, useRoute } from "@react-navigation/native"
import LoadingSpinner from "../../components/LoadingSpinner"
import { inTest } from "../../../jest/testEnvironment"
import { colors } from "../../colors"
import { IEnterpriseReducer } from "../../models/enterprise/EnterpriseModel"

export const Enterprise = (props: IEnterpriseReducer) => {
    const { getEnterpriseById, enterprise, errorEnterprise } = props

    const [ loading, setLoading ] = React.useState(inTest ? false : true)

    const route: RouteProp<{ params: { enterpriseId: number } }, "params"> = useRoute()
    const { enterpriseId } = route.params

    const imageUrl = `https://empresas.ioasys.com.br/${enterprise?.photo}`

    React.useEffect(() => {
        getEnterpriseById({ enterpriseId })
    }, [ enterpriseId, getEnterpriseById, route.params ])

    React.useEffect(() => {
        if (hasObject(errorEnterprise) || hasObject(enterprise) && (enterprise.id == enterpriseId)) {
            setLoading(false)
        }
    }, [ enterprise, enterpriseId, errorEnterprise ])

    return (
        <View style={styles.container}>
            <ScrollView testID={"test_enterprise_scrollview"}>
                <View style={styles.contentContainer}>
                    {loading ? (
                        <LoadingSpinner loading={loading}/>
                    ) : (
                        <View style={styles.enterpriseContainer}>
                            <Image
                                testID={"test_enterprise_image"}
                                source={{ uri: imageUrl }}
                                style={styles.image} />
                            <Text style={styles.enterpriseDescription}>
                                {enterprise.description}
                            </Text>
                            <Text style={styles.title}>
                                {firstLetter(translation("address"))}
                            </Text>
                            <Text>
                                {enterprise.country} {enterprise.city}
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteBackground,
    },
    contentContainer: {
        paddingTop: 50,
        paddingBottom: 50,
    },
    enterpriseContainer: {
        alignItems: "center",
    },
    title: {
        textAlign: "justify",
        margin: 12,
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: colors.lightGray,
        shadowColor: colors.black,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    enterpriseDescription: {
        textAlign: "justify",
        margin: 20,
        color: colors.darkGray,
        lineHeight: 24,
    }
})