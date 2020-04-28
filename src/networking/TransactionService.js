import { getAxios } from './config'

export class TransactionService {
    static getTransactions = async () => {
        const httpClient = await getAxios();
        //string constants must be moved to Endpoints.js    
        return await httpClient.get('/api/protected/transactions')
    }

    static create = async (name, amount) => {
        const httpClient = await getAxios();
        return await httpClient.post('/api/protected/transactions', {name, amount})
    }
}