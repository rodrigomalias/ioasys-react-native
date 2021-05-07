import "react-native"

import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock"

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage)

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({ goBack: jest.fn() }),
    useRoute: () => ({
        params: {
            enterprises: undefined,
            enterprise: {
                enterpriseName: "Test",
                enterpriseId: 1,
            }
        }
    }),
}))

console.error = (message) => {
    if (!/(Async Storage)/.test(message)) {
        // throw new Error(message);
    }
}