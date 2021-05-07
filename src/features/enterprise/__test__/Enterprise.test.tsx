import React from "react"
import { Enterprise } from "../Enterprise"
import { render } from "@testing-library/react-native"
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

describe("<Enterprise/>", () => {
    test("should render correctly", () => {
        const tree = renderer.create(<Enterprise {...initialState}/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test("should find the image using testId", () => {
        const { getByTestId } = render(<Enterprise {...initialState} />)

        const image = getByTestId("test_enterprise_image")

        expect(image).not.toBeNull()
    })

    test("should find the scrollView using testId", () => {
        const testIdName = "test_enterprise_scrollview"

        const { getByTestId } = render(<Enterprise {...initialState} />)

        const foundScrollView = getByTestId(testIdName)

        expect(foundScrollView).toBeTruthy()
    })
})