import { INCREMENT_COUNTER, RESET_COUNTER } from '../types/counterTypes'

//incrementing counter
export const incrementCount = () => {
    return (dispatch) => {
        dispatch({ type: INCREMENT_COUNTER })
    }
}

//reseting the counter
export const resetCount = () => {
    return (dispatch) => {
        dispatch({ type: RESET_COUNTER })
    }
}