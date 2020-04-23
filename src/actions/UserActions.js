import { UserService } from '../../networking/UserService'

export const GET_USER_INFO_ACTION = 'GET_USER_INFO_ACTION'
export const getUserInfoAction = (userInfo) => ({ type: GET_USER_INFO_ACTION, userInfo });

export function getUserInfoActionCreator() {
    return async (dispatch) => {
        const userInfo = await UserService.getUserInfo();
        dispatch(getUserInfoAction(userInfo.data.user_info_token));
    }
}