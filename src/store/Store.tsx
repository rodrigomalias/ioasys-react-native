import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import apiMiddleware from "./Middleware"
import isLoadingReducer from "./modules/loading/Reducer"
import loginReducer from "./modules/login/Reducer"
import enterpriseReducer from "./modules/enterprise/Reducer"

const appReducers = {
    isLoadingReducer,
    loginReducer,
    enterpriseReducer
}

const middlewares = [ apiMiddleware, thunkMiddleware, ]

const rootReducer = () => combineReducers({
    ...appReducers,
})

declare global {
    interface Window {
        store:any;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}

const composeEnhancers = compose

const store = createStore(rootReducer(), composeEnhancers(
    applyMiddleware(...middlewares)
))

export { store, appReducers }