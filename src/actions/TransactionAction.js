import { TransactionService } from '../../networking/TransactionService'
import { getUserInfoActionCreator } from '../actions/UserActions'
import { createErrorAction } from '../actions/CommonActions'

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS'
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION'

export const getTransactionsAction = (transactions) => ({ type: GET_TRANSACTIONS, transactions })
export const createTransactionAction = () => ({ type: CREATE_TRANSACTION })

export function getTransactionsActionCreator(transactions) {
    return async (dispatch) => {
        const result = await TransactionService.getTransactions()
        dispatch(getTransactionsAction(result.data.trans_token.reverse()))
    }
}

export function createTransactionActionCreator(name, amount) {
    return async (dispatch) => {
        try {
            await TransactionService.create(name, amount)
            dispatch(createTransactionAction())
            dispatch(getUserInfoActionCreator())
            dispatch(getTransactionsActionCreator())
        }
        catch (error) {
            dispatch(createErrorAction(error.response.data))
        }
    }
}
