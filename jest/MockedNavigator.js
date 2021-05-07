import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

// eslint-disable-next-line react/prop-types
const MockedNavigator = ({ component, params = {}, options = {} }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MockedScreen"
                    component={component}
                    initialParams={params}
                    options={options}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MockedNavigator