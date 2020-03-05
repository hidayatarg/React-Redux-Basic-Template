import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from "./index"
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
    return createStore(rootReducer, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())))
}
