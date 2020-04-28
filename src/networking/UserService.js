import { getAxios } from './config'

export class UserService {
    static getUserInfo = async () => {
        const httpClient = await getAxios();

        return await httpClient.get('/api/protected/user-info')
    }

    static getSuitableUsers = async (filter) => {
        const httpClient = await getAxios();

        return await httpClient.post('/api/protected/users/list', { filter: filter })
    }
}
