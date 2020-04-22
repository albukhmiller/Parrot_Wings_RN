import AuthReducer from './AuthReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authReducer : AuthReducer
});

export default rootReducer; 