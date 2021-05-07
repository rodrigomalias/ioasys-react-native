import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"
import { store } from "./src/store/Store"
import { MainNavigator } from "./src/navigation"
import { colors } from "./src/colors"

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
