import { AuthService } from '../../networking/AuthService'
import { AsyncStorage } from 'react-native';

import {getUserInfoActionCreator} from '../actions/UserActions'
import {getTransactionsActionCreator} from '../actions/TransactionAction'

export const AUTH_SUCCESS_ACTION = 'AUTH_SUCCESS_ACTION'
export const NAVIGATE_TO_LOGIN = 'NAVIGATE_TO_LOGIN'

export const authSuccessAction = (token) => ({ type: AUTH_SUCCESS_ACTION, token });
export const navigateToLogin = (isLoginForm) => ({ type: NAVIGATE_TO_LOGIN, isLoginForm });

export function loginAction(email, password) {
    return async (dispatch) => {
        try {
            const result = await AuthService.login(email, password)
            dispatch(authSuccessAction(result.data.id_token))
            await AsyncStorage.setItem('token', result.data.id_token)

            dispatch(getUserInfoActionCreator())
            dispatch(getTransactionsActionCreator())
        }
        catch (error) {
            console.log(error.message)
        }
    }
}

export function navigateToLoginAction(isLoginForm) {
    return (dispatch) => {
        dispatch(navigateToLogin(isLoginForm))
    }
}