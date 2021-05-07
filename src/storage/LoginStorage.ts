import AsyncStorage from "@react-native-async-storage/async-storage"

export class LoginStorage {

    currentLevelKey: string = "HEADER"
    async getHeader(): Promise<any | null> {
        try {
            const headerRetrieve = await AsyncStorage.getItem(this.currentLevelKey)
            return headerRetrieve !== null ? JSON.parse(headerRetrieve) : null
        } catch (error) {
            // Error getting data
        }

        return null
    }
    async putHeader(header: any): Promise<void> {
        try {
            await AsyncStorage.setItem(this.currentLevelKey, JSON.stringify(header))
        } catch (error) {
            // Error saving data
        }
    }
    async eraseHeader(): Promise<boolean> {
        try {
            await AsyncStorage.removeItem(this.currentLevelKey)
            return true
        } catch (error) {
            return false
        }
    }
}