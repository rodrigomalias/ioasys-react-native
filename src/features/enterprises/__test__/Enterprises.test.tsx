import React from "react"
import { Enterprises } from "../Enterprises"
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

describe("<Enterprises/>", () => {
    test("should render correctly", () => {
        const tree = renderer.create(<Enterprises {...initialState}/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test("flatlist exists", () => {
        const { getByTestId } = render(<Enterprises {...initialState} />)

        const flatlist = getByTestId("test_enterprises_flatlist")

        expect(flatlist).not.toBeNull()
    })

    test("should show empty flatlist", () => {
        const testIdName = "test_enterprises_flatlist_empty"
        initialState.enterprises = []
        const { getByTestId } = render(<Enterprises {...initialState} />)

        const foundEmptyText = getByTestId(testIdName)

        expect(foundEmptyText).toBeTruthy()
    })
})