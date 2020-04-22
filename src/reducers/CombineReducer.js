import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authReducer : AuthReducer,
    userReducer : UserReducer,
});

export default rootReducer; 