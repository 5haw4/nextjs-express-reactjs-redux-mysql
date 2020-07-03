import { SET_REPOS } from '../types/githubTypes'

const initialState = {
    repos: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REPOS:
            return { ...state, repos: action.repos }
        default:
            return state;
    }
}

export default Reducer