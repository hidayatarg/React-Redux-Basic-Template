import { createStore, applyMiddleware } from 'redux'

import rootReducers from "./index"
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(){
    //this will warn us if we accidentally mutate Redux state.
    return createStore(rootReducers, applyMiddleware(reduxImmutableStateInvariant()))
}