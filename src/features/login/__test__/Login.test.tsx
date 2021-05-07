import React from "react"
import { Login } from "../Login"
import { fireEvent, render } from "@testing-library/react-native"
import initialState from "../../../store/modules/login/State"
import MockedNavigator from "../../../../jest/MockedNavigator"

describe("<Login/>", () => {
    test("should render correctly", () => {
        const tree = render(<MockedNavigator component={Login} />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test("input email exists", () => {
        const { getByTestId } = render(<Login {...initialState} />)
        const mockEmail = "test@gmail.com"

        const input = getByTestId("test_login_email_input")
        fireEvent.changeText(input, mockEmail)

        expect(input.props.value).toBe(mockEmail)
    })

    test("input password exists", () => {
        const { getByTestId } = render(<Login {...initialState} />)
        const mockPassword = "123456"

        const input = getByTestId("test_login_password_input")
        fireEvent.changeText(input, mockPassword)

        expect(input.props.value).toBe(mockPassword)
    })

    test("should find the image using testId", () => {
        const { getByTestId } = render(<Login {...initialState} />)

        const image = getByTestId("test_login_image")

        expect(image).not.toBeNull()
    })

    test("should find the button using testId", () => {
        const testIdName = "test_login_handle_button"

        const { getByTestId } = render(<Login {...initialState} />)

        const foundButton = getByTestId(testIdName)

        expect(foundButton).toBeTruthy()
    })
})