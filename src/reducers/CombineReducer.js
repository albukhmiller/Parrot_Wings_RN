import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import CommonReducer from './CommonReducer'
import TransactionReducer from './TransactionReducer'

import { LOGOUT_ACTION } from "../actions/AuthActions"

import { combineReducers } from 'redux'

const appReducer = combineReducers({
    authReducer: AuthReducer,
    userReducer: UserReducer,
    transReducer: TransactionReducer,
    commonReducer: CommonReducer
});

const rootReducer = (state, action) => {
    if (action.type == LOGOUT_ACTION) {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer; 