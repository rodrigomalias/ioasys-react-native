import React, { useEffect } from "react"
import { Text, View } from "react-native"
import initialState, { ILoginReducer } from "../../store/modules/login/State"

export const Login = (props: ILoginReducer) => {
    const { postSignIn } = props

    useEffect(() => {
        postSignIn()
    }, [])

    return (
        <View>
            <Text>UserLogged</Text>
        </View>
    )
}
