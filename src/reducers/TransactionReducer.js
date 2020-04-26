import { GET_TRANSACTIONS, CREATE_TRANSACTION } from "../actions/TransactionAction"

const INITIAL_STATE = {
    transactions: []
}

export default function transactionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TRANSACTIONS: {
            return { ...state, transactions: action.transactions }
        }
        case CREATE_TRANSACTION: {
            return state
        }
        default: {
            return state;
        }
    }
}

