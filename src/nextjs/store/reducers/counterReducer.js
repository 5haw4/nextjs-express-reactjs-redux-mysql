import { INCREMENT_COUNTER, RESET_COUNTER } from '../types/counterTypes'

const initialState = {
    counter: 0
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_COUNTER:
            return { counter: state.counter + 1 }
        case RESET_COUNTER:
            return { counter: 0 }
        default:
            return state;
    }
}

export default Reducer