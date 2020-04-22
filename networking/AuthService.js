import { getAxios as httpClient } from './config'

export class AuthService {
    static login = async (email, password) => {
        return await httpClient().post('/sessions/create', { email: email, password: password })
    }

    static registration = async (username, email, password) => {
        return await httpClient().post('/users', { username: username, email: email, password: password })
    }
}