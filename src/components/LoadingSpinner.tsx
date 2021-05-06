import React from "react"
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import { setIsLoadingSpinner } from "../store/modules/loading/Action"
import { ILoadingReducer } from "../store/modules/loading/State"
import { appReducers } from "../store/Store"

export interface LoadingSpinnerProps {

}

function LoadingSpinner(props: LoadingSpinnerProps & ILoadingReducer) {
    const { isLoadingSpinner,  } = props
    return (
        isLoadingSpinner ? (
            <View style={styles.loadSpinner}>
                <ActivityIndicator size="large" color={'#01814e'} />
            </View>
        ) : (
            <></>
        )
    )
}

const isLoadingReducerData = ({ isLoadingReducer }: typeof appReducers) => {
    return {
        ...isLoadingReducer,
    }
}

export default connect(isLoadingReducerData, {
    setIsLoadingSpinner,
})(LoadingSpinner)

const styles = StyleSheet.create({
    loadSpinner: {
      height: Dimensions.get('window').height,
      justifyContent: 'center',
    },
    totalHeroesContainer: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
    },
    totalHeroes: {
      fontWeight: 'bold',
      fontSize: 16,
    },
})