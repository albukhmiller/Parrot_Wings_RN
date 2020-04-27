import {
    ERROR_SHOWN,
    ERROR_ACTION
} from '../actions/CommonActions'

const INITIAL_STATE = {
    error: ''
}

export default function commonReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ERROR_SHOWN: {
            return { ...state, error: '' }
        }
        case ERROR_ACTION:
            return { ...state, error: action.error }
        default:
            return state;
    }
}
