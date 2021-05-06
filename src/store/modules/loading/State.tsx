export interface ILoadingReducer {
    isLoadingSpinner: boolean,
    setIsLoadingSpinner: Function,
}

const initialState: ILoadingReducer = {
    isLoadingSpinner: false,
    setIsLoadingSpinner: () => {},
}

export default initialState