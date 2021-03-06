import {
    AUTH_SUCCESS_ACTION,
    LOGOUT_ACTION,
    NAVIGATE_TO_LOGIN,
    ERROR_SHOWN,
    ERROR_ACTION
} from "../actions/AuthActions"

const INITIAL_STATE = {
    isAuthorized: false
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_SUCCESS_ACTION: {
            return { ...state, isAuthorized: true, token: action.token }
        }
        case NAVIGATE_TO_LOGIN: {
            return { ...state, isLoginForm: action.isLoginForm }
        }
        case LOGOUT_ACTION: {
            return { ...state, isAuthorized: false, token: null }
        }
        case ERROR_ACTION: {
            return { ...state, error: action.error }
        }
        case ERROR_SHOWN: {
            return { ...state, error: '' }
        }
        default:
            return state;
    }
}