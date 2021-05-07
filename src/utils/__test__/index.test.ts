import { firstLetter, capitalize, hasObject, hasArray } from "../index"

const mockValue = "string mock"

describe("Utils/index", () => {
    afterEach(() => jest.clearAllMocks())

    test("firstLetter", () => {
        const value = firstLetter(mockValue)
        expect(value).toEqual("String mock")
    })

    test("capitalize", () => {
        const value = capitalize(mockValue)
        expect(value).toEqual("String Mock")
    })

    test("hasObject with one object", () => {
        const mockObjectValue = {
            object: ""
        }
        const value = hasObject(mockObjectValue)

        expect(value).toBeTruthy()
    })

    test("hasObject with zero object", () => {
        const mockObjectValue = {}

        const value = hasObject(mockObjectValue)

        expect(value).toBeFalsy()
    })

    test("hasObject with undefined value", () => {
        const mockObjectValue = undefined

        //@ts-ignore
        const value = hasObject(mockObjectValue)

        expect(value).toBeFalsy()
    })

    test("hasArray with one array", () => {
        const mockArrayValue = [ {
            object: ""
        } ]
        const value = hasArray(mockArrayValue)

        expect(value).toBeTruthy()
    })

    test("hasArray with empty array", () => {
        const mockArrayValue: unknown[] = []

        const value = hasArray(mockArrayValue)

        expect(value).toBeFalsy()
    })

    test("hasArray with undefined value", () => {
        const mockArrayValue = undefined

        //@ts-ignore
        const value = hasArray(mockArrayValue)

        expect(value).toBeFalsy()
    })
})