export const ERROR_ACTION = 'ERROR_ACTION'
export const ERROR_SHOWN = 'ERROR_SHOWN'

export const errorAction = (error) => ({ type: ERROR_ACTION, error })
export const errorShownAction = () => ({ type: ERROR_SHOWN })


export function errorShown() {
    return (dispatch) => {
        dispatch(errorShownAction())
    }
}

export function createErrorAction(error) {
    return (dispatch) => dispatch(errorAction(error))
}