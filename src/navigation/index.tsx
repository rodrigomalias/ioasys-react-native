import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import LoginContainer from "../features/login/LoginContainer"
import EnterprisesContainer from "../features/enterprises/EnterprisesContainer"
import EnterpriseContainer from "../features/enterprise/EnterpriseContainer"
import { RouteProp } from "@react-navigation/native"

const Stack = createStackNavigator()

export type EnterpriseParams = {
    enterprises: undefined
    enterprise: {
        enterpriseName: string,
        enterpriseId: number,
    }
}

function Enterprises() {
    const EnterprisesStack = createStackNavigator<EnterpriseParams>()
    return (
        <EnterprisesStack.Navigator>
            <EnterprisesStack.Screen
                name="enterprises"
                component={EnterprisesContainer}
                options={{
                    headerTitleAlign: "center",
                    title: "Empresas",
                    headerStyle: {
                        borderBottomColor: "#000000",
                        borderBottomWidth: 0.5,
                    }
                }}
            />
            <EnterprisesStack.Screen
                name="enterprise"
                component={EnterpriseContainer}
                options={({ route }) => ({
                    headerTitleAlign: "center",
                    title: route.params?.enterpriseName,
                    headerStyle: {
                        borderBottomColor: "#000000",
                        borderBottomWidth: 0.5,
                    }
                })}
            />
        </EnterprisesStack.Navigator>
    )
}

export function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen
                name="login"
                component={LoginContainer}
                options={{
                    headerTitleAlign: "center",
                    title: "Login",
                    headerStyle: {
                        borderBottomColor: "#000000",
                        borderBottomWidth: 0.5,
                    }
                }}
            />
            <Stack.Screen
                name="enterprises"
                component={Enterprises}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    loadSpinner: {
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        margin: "auto",
        zIndex: 100,
    },
})