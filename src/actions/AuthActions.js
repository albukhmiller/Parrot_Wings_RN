import { AuthService } from '../../networking/AuthService'

export const AUTH_SUCCESS_ACTION = 'AUTH_SUCCESS_ACTION'
export const NAVIGATE_TO_LOGIN = 'NAVIGATE_TO_LOGIN'

export const authSuccessAction = (token) => ({ type: AUTH_SUCCESS_ACTION, token });
export const navigateToLogin = (isLoginForm) => ({ type: NAVIGATE_TO_LOGIN, isLoginForm });

export function loginAction(email, password) {
    return async (dispatch) => {
        try {
            const result = await AuthService.login(email, password)
            dispatch(authSuccessAction(result.data.id_token))
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