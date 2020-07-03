import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import counterReducer from './counterReducer'
import githubReducer from './githubReducer'

const rootReducer = combineReducers({
    counterReducer,
    githubReducer,
})

export const initStore = (initialState = {}) => {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(ReduxThunk)
    )
}