import { Alert } from "react-native";
import { errorShown } from './actions/CommonActions'
import {store} from '../src/store/store'

export const showError = (message, title) => {

    return Alert.alert(
        title,
        message,
        [
            {
                text: "ОК",
                style: "cancel",
                onPress: () => { 
                    store.dispatch(errorShown()) }
            }
        ],
        { cancelable: false }
    )
}
