import { AUTH_SUCCESS_ACTION, NAVIGATE_TO_LOGIN } from "../actions/AuthActions"

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
        default:
            return state;
    }
}