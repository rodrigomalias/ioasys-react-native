import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"
import { store } from "./store/Store"
import { MainNavigator } from "./navigation"
import { NavigationContainer } from "@react-navigation/native"
import { colors } from "./colors"

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.primaryDark} />
                <MainNavigator/>
            </NavigationContainer>
        </Provider>
    )
}

export default App
