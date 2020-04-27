import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet, Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import FloatingLabelTextInput from './FloatingLabelTextInput'
import CustomButton from './CustomButton'

import { loginAction } from "../src/actions/AuthActions"
import { navigateToLoginAction } from "../src/actions/AuthActions"

import { validateEmail } from '../src/Utils/Validators'
import { showError } from '../src/CustomAlert'

export default function SignIn() {

    const authError = useSelector(state => state.commonReducer.error);

    const [username, serUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (authError)
            showError('Неверный логин, либо пароль', 'Ошибка авторизации', dispatch)
    })
    const signIn = () => {
        if (!validateEmail(username)) {
            showError('Некорретный формат email', 'Ошибка ввода')
            return
        }
        try {
            dispatch(loginAction(username, password))
        }
        catch (error) {
            showError('Неверный логин либо пароль', 'Ошибка')
        }
    }

    const validateForEmpty = () => {
        return (username && password) ? false : true
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/ic_logo.png")} />
                <FloatingLabelTextInput
                    value={username}
                    onChangeText={username => {
                        serUsername(username)
                    }}
                    style={styles.textInputField} placeholder="Имя пользователя"
                />
                <FloatingLabelTextInput
                    value={password}
                    onChangeText={password => {
                        setPassword(password)
                    }}
                    style={styles.textInputField} isSecure={true} placeholder="Пароль" />
                <CustomButton style={styles.button} title="Войти"
                    disabled={validateForEmpty()}
                    onClick={() => {
                        signIn()
                    }} />
                <TouchableOpacity onPress={() => {
                    dispatch(navigateToLoginAction(false))
                }}>
                    <Text style={styles.label}>Зарегистрироваться?</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};

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
        marginEnd: 20,
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
