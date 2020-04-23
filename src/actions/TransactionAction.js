import { TransactionService } from '../../networking/TransactionService'

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS'

const getTransactionsAction = (transactions) => ({ type: GET_TRANSACTIONS, transactions })

export function getTransactionsActionCreator(transactions) {
    return async (dispatch) => {
        const result = await TransactionService.getTransactions()
        dispatch(getTransactionsAction(result.data.trans_token))
    }
}
