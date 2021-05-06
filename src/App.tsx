/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler"
import React from "react"
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from "react-native"

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from "react-native/Libraries/NewAppScreen"
import LoadingSpinner from "./components/LoadingSpinner"
import { Provider } from "react-redux"
import loadingInitialState from "./store/modules/loading/State"
import loginInitialState from "./store/modules/login/State"
import enterpriseInitialState from "./store/modules/enterprise/State"
import { store } from "./store/Store"
import LoginContainer from "./features/login/LoginContainer"
import EnterprisesContainer from "./features/enterprises/EnterprisesContainer"
import { MainNavigator } from "./navigation"
import { NavigationContainer } from "@react-navigation/native"

const App = () => {
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                {/* <SafeAreaView style={backgroundStyle}> */}
                <StatusBar barStyle="light-content" backgroundColor={"#01814e"} />
                <LoadingSpinner {...loadingInitialState}/>
                <MainNavigator/>
                {/* <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={backgroundStyle}
                    >
                        
                        <LoginContainer {...loginInitialState}/>
                        
                        <EnterprisesContainer {...enterpriseInitialState}/>
                    </ScrollView> */}
                {/* </SafeAreaView> */}
            </NavigationContainer>
        </Provider>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400"
    },
    highlight: {
        fontWeight: "700"
    }
})

export default App
