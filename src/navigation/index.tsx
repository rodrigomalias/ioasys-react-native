import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import LoginContainer from "../features/login/LoginContainer"
import { EnterpriseNavigator } from "./navigators/EnterpriseNavigator"

const Stack = createStackNavigator()

export function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen
                name="login"
                component={LoginContainer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="enterprises"
                component={EnterpriseNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}