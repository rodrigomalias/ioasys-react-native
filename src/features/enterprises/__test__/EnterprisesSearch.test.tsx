import React from "react"
import { EnterprisesSearch } from "../EnterprisesSearch"
import { fireEvent, render } from "@testing-library/react-native"
import renderer from "react-test-renderer"

const mockValue = {
    city: "SP",
    country: "Brazil",
    description: "Description test",
    email_enterprise: "email@email.com",
    enterprise_name: "Company test",
    enterprise_type: {
        enterprise_type_name: "Type test",
        id: 1
    },
    facebook: undefined,
    id: 1,
    linkedin: undefined,
    own_enterprise: false,
    phone: undefined,
    photo: "photo.png",
    share_price: 5000,
    shares: undefined,
    twitter: undefined,
    value: 500
}

const initialState = {
    getEnterpriseById: () => jest.fn(),
    getEnterprisesNameOrType: () => jest.fn(),
    getEnterprises: () => jest.fn(),
    enterprise: mockValue,
    enterprises: [ mockValue ],
    errorEnterprise: "",
    errorEnterprises: "",
}

describe("<EnterprisesSearch/>", () => {
    test("should render correctly", () => {
        const tree = renderer.create(<EnterprisesSearch callback={() => jest.fn()}/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test("should find the picker using testId", () => {
        const { getByTestId } = render(<EnterprisesSearch callback={() => jest.fn()}/>)

        const picker = getByTestId("test_enterprises_search_picker")

        expect(picker).not.toBeNull()
    })

    test("should find the input using testId", () => {
        const { getByTestId } = render(<EnterprisesSearch callback={() => jest.fn()}/>)

        const input = getByTestId("test_enterprises_search_input")

        expect(input).not.toBeNull()
    })

    test("input has text", () => {
        const { getByTestId } = render(<EnterprisesSearch callback={() => jest.fn()}/>)
        const mockName = "enterprise name"

        const input = getByTestId("test_enterprises_search_input")
        fireEvent.changeText(input, mockName)

        expect(input.props.value).toBe(mockName)
    })

    test("should find the button using testId", () => {
        const { getByTestId } = render(<EnterprisesSearch callback={() => jest.fn()}/>)

        const button = getByTestId("test_enterprises_search_button")

        expect(button).not.toBeNull()
    })
})