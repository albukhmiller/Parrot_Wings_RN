import { Alert } from "react-native";
import { errorShown } from './actions/CommonActions'

export const showError = (message, title, dispatch) => {

    return Alert.alert(
        title,
        message,
        [
            {
                text: "ОК",
                style: "cancel",
                onPress: () => { 
                    console.log(dispatch)
                    dispatch(errorShown()) }
            }
        ],
        { cancelable: false }
    )
}
