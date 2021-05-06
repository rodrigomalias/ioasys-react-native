import { useNavigation } from "@react-navigation/native"
import * as React from "react"
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from "react-native"
import { ILoginReducer } from "store/modules/login/State"
import LoadingSpinner from "../../components/LoadingSpinner"

export const Login = (props: ILoginReducer) => {
    const { postSignIn, login } = props

    const navigation = useNavigation()
    const [ email, setEmail ] = React.useState("testeapple@ioasys.com.br")
    const [ password, setPassword ] = React.useState("12341234")
    const [ loading, setLoading ] = React.useState(false)

    const hasObject = (object: Object) => {
        if (object != null && object != undefined) {
            return Object.keys(object).length != 0
        }
        return false
    }

    const handleLogin = React.useCallback(() => {
        postSignIn({ email, password })
        setLoading(true)
    }, [ email, password, postSignIn ])

    React.useEffect(() => {
        if (loading && hasObject(login)) {
            setLoading(false)
            navigation.navigate("enterprises")
        }
    }, [ loading, login, navigation ])

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/logo_ioasys.png")} />
            <View style={styles.inputView}>
                <TextInput
                    value={email}
                    style={styles.textInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    value={password}
                    style={styles.textInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}/>
            </View>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <Text style={styles.loading}>
                    {loading && (
                        <LoadingSpinner loadingColor={"white"} loading={loading}/>
                    )}
                </Text>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        backgroundColor: "#01814e",
        flexDirection: "row",
        alignContent: "center",
    },

    loading: {
        marginLeft: 10,
        width: 30,
    },

    loginText: {
        flex: 1,
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        marginRight: 40,
    },
})