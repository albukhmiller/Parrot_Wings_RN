import { getAxios as httpClient } from './config'

export async function login(email, password) {
    return await httpClient().post('/sessions/create', { email: email, password: password })
}

export async function registration(username, email, password) {
    return await httpClient().post('/users', { username: username, email: email, password: password })
}