import {
    GET_USER_INFO_ACTION,
    GET_SUITABLE_USERS,
    CLEAR_SUITABLE_USERS
} from "../actions/UserActions"

const INITIAL_STATE = {
    userInfo: {
        balance: null,
        name: null,
        email: null
    },
    filteredUser: []
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
        case GET_SUITABLE_USERS: {
            return { ...state, filteredUser: action.filtredUsers }
        }

        case CLEAR_SUITABLE_USERS: {
            return { ...state, filteredUser: [] }
        }
        default: {
            return state;
        }
    }
}