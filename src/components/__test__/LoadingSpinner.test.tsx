import React from "react"
import renderer from "react-test-renderer"
import LoadingSpinner from "../LoadingSpinner"
import { render } from "@testing-library/react-native"

describe("<LoadingSpinner/>", () => {

    test("renders correctly", () => {
        const tree = renderer.create(<LoadingSpinner/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    test("should create an item", () => {
        const { getByTestId, } = render(<LoadingSpinner loading={true} />)

        const element = getByTestId ("ActivityIndicator")
        expect(element).toBeDefined()
    })
})