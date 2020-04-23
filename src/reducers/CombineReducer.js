import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import TransactionReducer from './TransactionReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    userReducer: UserReducer,
    transReducer: TransactionReducer,
});

export default rootReducer; 