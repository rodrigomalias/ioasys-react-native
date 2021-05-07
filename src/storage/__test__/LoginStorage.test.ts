import AsyncStorage from "@react-native-async-storage/async-storage"

import { LoginStorage } from "../LoginStorage"

const loginStorage = new LoginStorage()

const mockValue = { x: 1 }
const mockString = JSON.stringify(mockValue)

describe("LoginStorage.ts", () => {
    beforeEach(() => {
    //@ts-ignore
    // eslint-disable-next-line no-undef
        AsyncStorage.getItem.mockReturnValue(Promise.resolve(mockString))
    })

    afterEach(() => jest.clearAllMocks())

    test("getHeader", async () => {
        const value = await loginStorage.getHeader()
        expect(value).toEqual(JSON.parse(mockString))
    })

    test("putHeader", async () => {
        const value = await loginStorage.putHeader("newValue")
        expect(value).not.toEqual(JSON.parse(mockString))
    })

    test("eraseHeader", async () => {
        await loginStorage.eraseHeader()
        expect(AsyncStorage.removeItem).toHaveBeenCalled()
    })
})