import React from "react"
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import { setIsLoadingSpinner } from "../store/modules/loading/Action"
import { ILoadingReducer } from "../store/modules/loading/State"
import { appReducers } from "../store/Store"

export interface LoadingSpinnerProps {
    loading?: boolean,
    loadingColor?: string
}

function LoadingSpinner(props: LoadingSpinnerProps & ILoadingReducer) {
    const { isLoadingSpinner, loading, loadingColor } = props
    return (
        isLoadingSpinner || loading ? (
            <View style={loading ? styles.normalSpinner : styles.loadSpinner}>
                <ActivityIndicator size={"large"} color={loadingColor ? loadingColor : "#01814e"} />
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
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        margin: "auto",
        zIndex: 100,
    },
    normalSpinner: {

    },
})