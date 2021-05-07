import { useNavigation } from "@react-navigation/native"
import { colors } from "../../colors"
import * as React from "react"
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from "react-native"
import { ILoginReducer } from "store/modules/login/State"
import LoadingSpinner from "../../components/LoadingSpinner"
import { translation, hasObject } from "../../utils"
import { ILoadingReducer } from "../../store/modules/loading/State"

export const Login = (props: ILoginReducer & ILoadingReducer) => {
    const { postSignIn, login, errorLogin, isLoadingSpinner } = props

    const navigation = useNavigation()
    const [ email, setEmail ] = React.useState("testeapple@ioasys.com.br")
    const [ password, setPassword ] = React.useState("12341234")
    const [ loading, setLoading ] = React.useState(false)

    React.useEffect(() => {
        if (loading && hasObject(login)) {
            setLoading(false)
            navigation.navigate("enterprises")
        }
    }, [ loading, login, navigation ])

    const handleLogin = React.useCallback(() => {
        setLoading(true)
        postSignIn({ email, password })
    }, [ email, password, postSignIn ])

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/logo_ioasys.png")} />
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.textInput}
                    placeholder={translation("login.email")}
                    onChangeText={(email) => setEmail(email)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={password}
                    style={styles.textInput}
                    placeholder={translation("login.password")}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}/>
            </View>
            <Text style={styles.errorMessage}>
                {errorLogin}
            </Text>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.loginButton}>
                <Text style={styles.loading}>
                    {loading && isLoadingSpinner && (
                        <LoadingSpinner loadingColor={colors.white} loading={loading}/>
                    )}
                </Text>
                <Text style={styles.loginText}>{translation("login.button").toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.whiteBackground,
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 0.5,
        borderRadius: 5,
    },
    textInput: {
        width: "100%",
        marginLeft: 5,
    },
    loginButton: {
        width: "80%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: colors.primaryDark,
        flexDirection: "row",
        alignContent: "center",
    },
    loading: {
        marginLeft: 10,
        width: 30,
    },
    loginText: {
        flex: 1,
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginRight: 40,
    },
    errorMessage: {
        fontWeight: "bold",
    },
})