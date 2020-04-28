import { UserService } from '../networking/UserService'

export const GET_USER_INFO_ACTION = 'GET_USER_INFO_ACTION'
export const GET_SUITABLE_USERS = 'GET_SUITABLE_USERS'
export const CLEAR_SUITABLE_USERS = 'CLEAR_SUITABLE_USERS'

export const getSuitableUsersAction = (filtredUsers) => ({ type: GET_SUITABLE_USERS, filtredUsers });
export const getUserInfoAction = (userInfo) => ({ type: GET_USER_INFO_ACTION, userInfo });
export const removeSuitableUsers = () => ({ type: CLEAR_SUITABLE_USERS });

export function getUserInfoActionCreator() {
    return async (dispatch) => {
        try {
        const userInfo = await UserService.getUserInfo();
        dispatch(getUserInfoAction(userInfo.data.user_info_token));
        }
        catch(error) {
            console.log(error)
        }
    }
}

export function getSuitableUsersActionCreator(filter) {
    return async (dispatch) => {
        try {
            if (!filter) throw new TypeError();

            const result = await UserService.getSuitableUsers(filter);
            dispatch(getSuitableUsersAction(result.data))
        }
        catch (error) {
           console.log(error)
        }
    }
}

export function clearSuitableUsers() {
    return async (dispatch) => {
        dispatch(removeSuitableUsers())
    }
}