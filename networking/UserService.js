import { getAxios as httpClient } from './config'

export async function getUserInfo() {
    return await httpClient.get('/api/protected/user-info')
}
