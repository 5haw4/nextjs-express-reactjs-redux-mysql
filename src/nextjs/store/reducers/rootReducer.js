import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import counterReducer from './counterReducer'

const rootReducer = combineReducers({
    counterReducer,
})

export default createStore(rootReducer, applyMiddleware(ReduxThunk));