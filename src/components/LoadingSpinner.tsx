import { colors } from "../colors"
import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"

export interface LoadingSpinnerProps {
    loading?: boolean,
    loadingColor?: string
}

export default function LoadingSpinner(props: LoadingSpinnerProps) {
    const { loading, loadingColor } = props
    return (
        loading ? (
            <ActivityIndicator
                size={"large"}
                color={loadingColor ? loadingColor : colors.primaryDark} />
        ) : (
            <></>
        )
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
    normalSpinner: {

    },
})