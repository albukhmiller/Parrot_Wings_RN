import { getAxios } from './config'

export class TransactionService {
    static getTransactions = async () => {
        const httpClient = await getAxios();

        return await httpClient.get('/api/protected/transactions')
    }
}