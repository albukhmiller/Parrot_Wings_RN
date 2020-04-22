import { GET_USER_INFO_ACTION } from "../actions/UserActions"

const INITIAL_STATE = {
    userInfo: {
        balance: null,
        name: null,
        email: null
    }
}

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_INFO_ACTION: {
            return {
                ...state,
                userInfo: {
                    balance: action.userInfo.balance,
                    name: action.userInfo.name,
                    email: action.userInfo.email
                }
            }
        }
        default: {
            return state;
        }
    }
}