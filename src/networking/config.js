import { createPersistor, getStoredState } from 'redux-persist'
import { store } from '../store/store'
const axios = require('axios').default;

export async function getAxios() {

    const token = store.getState().authReducer.token

    if (token) {
        const client = axios.create({
            baseURL: 'http://193.124.114.46:3001',
            headers: {
                Authorization: 'Bearer ' + token
            },
            timeout: 5000
        })
        return client;
    }

    return axios.create({
        baseURL: 'http://193.124.114.46:3001',
        timeout: 5000
    })
} 