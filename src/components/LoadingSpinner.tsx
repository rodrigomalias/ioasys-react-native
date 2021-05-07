import { colors } from "../colors"
import React from "react"
import { ActivityIndicator } from "react-native"

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