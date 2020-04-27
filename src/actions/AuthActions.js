import { AuthService } from '../../networking/AuthService'
import { createErrorAction } from '../actions/CommonActions'

import { getUserInfoActionCreator } from '../actions/UserActions'
import { getTransactionsActionCreator } from '../actions/TransactionAction'

export const AUTH_SUCCESS_ACTION = 'AUTH_SUCCESS_ACTION'
export const LOGOUT_ACTION = 'LOGOUT_ACTION'
export const NAVIGATE_TO_LOGIN = 'NAVIGATE_TO_LOGIN'
export const REGISTRATION_ACTION = 'REGISTRATION_ACTION'

export const authSuccessAction = (token) => ({ type: AUTH_SUCCESS_ACTION, token });
export const navigateToLogin = (isLoginForm) => ({ type: NAVIGATE_TO_LOGIN, isLoginForm });
export const logoutAction = () => ({ type: LOGOUT_ACTION })
export const registrationAction = (token) => ({ type: REGISTRATION_ACTION, token })

const retrieveUserInfo = (dispatch) => {
    dispatch(getUserInfoActionCreator())
    dispatch(getTransactionsActionCreator())
}

export function loginAction(email, password) {
    return async (dispatch) => {
        try {
            const result = await AuthService.login(email, password)
            dispatch(authSuccessAction(result.data.id_token))

            retrieveUserInfo(dispatch)
        }
        catch (error) {
            dispatch(createErrorAction(error.response.data))
        }
    }
}

export function registration(username, password, email) {
    return async (dispatch) => {
        try {
            console.log(username, email, password)
            const result = await AuthService.registration(username, email, password)
            dispatch(authSuccessAction(result.data.id_token))

            retrieveUserInfo(dispatch)
        }
        catch (error) {
            dispatch(createErrorAction(error.response.data))
        }
    }
}

export function navigateToLoginAction(isLoginForm) {
    return (dispatch) => {
        dispatch(navigateToLogin(isLoginForm))
    }
}

export function logoutActionCreator() {
    return async (dispatch) => {
        dispatch(logoutAction())
    }
}