import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FloatingLabelTextInput from './FloatingLabelTextInput'
import CustomButton from './CustomButton'

export default class SignUp extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FloatingLabelTextInput style={styles.textInputField} placeholder="Имя пользователя" />
                    <FloatingLabelTextInput style={styles.textInputField} placeholder="Email" />
                    <FloatingLabelTextInput style={styles.textInputField} isSecure={true} placeholder="Пароль" />
                    <CustomButton style={styles.button} title="Зарегистрироваться"
                        onClick={() => console.log('qweqwe')} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
    logo: {
        width: 80,
        marginTop: 50,
        alignSelf: "center",
        height: 80,
        backgroundColor: 'transparent'
    },
    button: {
        marginTop: 40,
        marginStart: 60,
        marginEnd: 60
    },
    textInputField: {
        height: 65,
        marginEnd: 30,
        marginStart: 30
    },
    label: {
        fontSize: 19,
        alignSelf: 'center',
        marginTop: 20,
        color: "blue",
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
    }
});
