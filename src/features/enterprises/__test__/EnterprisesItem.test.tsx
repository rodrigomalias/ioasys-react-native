import React from "react"
import { EnterprisesItem } from "../EnterprisesItem"
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

describe("<EnterprisesItem/>", () => {
    test("should render correctly", () => {
        const tree = renderer.create(<EnterprisesItem enterprise={mockValue}/>).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test("should find the image using testId", () => {
        const { getByTestId } = render(<EnterprisesItem enterprise={mockValue} />)

        const image = getByTestId("test_enterprises_item_image")

        expect(image).not.toBeNull()
    })

    test("should find the button using testId", () => {
        const { getByTestId } = render(<EnterprisesItem enterprise={mockValue} />)

        const image = getByTestId("test_enterprises_item_button")

        expect(image).not.toBeNull()
    })
})