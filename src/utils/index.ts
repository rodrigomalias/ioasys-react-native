// import i18n from "translations/I18n"

export const firstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalize = (str: string) => {
    return str
        .split(" ")
        .map((item) => item.length > 2 ? item.charAt(0).toUpperCase() + item.slice(1) : item)
        .join(" ")
}

export const capsLock = (str: string) => {
    return str.toUpperCase()
}

export const lowerCase = (str: string) => {
    return str.toLowerCase()
}

export const hasObject = (object: Object) => {
    if (object != null && object != undefined) {
        return Object.keys(object).length != 0
    }
    return false
}

export const hasArray = (array: Array<unknown>) => {
    return array.length > 0 ? true : false
}

// export const translation = (str: string) => {
//     return i18n.translate(str)
// }