import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FloatingLabelTextInput from './FloatingLabelTextInput'
import CustomButton from './CustomButton'

import { validateEmail } from '../src/Utils/Validators'
import { showError } from '../src/CustomAlert'

import {registration} from '../src/actions/AuthActions'

export default function SignUp() {
    const authError = useSelector(state => state.commonReducer.error);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (authError)
            showError('Пользователь с таким email уже существует', 'Ошибка авторизации', dispatch)
    })

    const validateForEmpty = () => {
        return (username && password && email) ? false : true
    }

    const signUp = () => {
        if (!validateEmail(email)) {
            showError('Некорретный формат email', 'Ошибка ввода')
            return
        }

        dispatch(registration(username, password, email))
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <FloatingLabelTextInput
                    value={username}
                    onChangeText={username => {
                        setUsername(username)
                    }}
                    style={styles.textInputField} placeholder="Имя пользователя" />
                <FloatingLabelTextInput
                    value={email}
                    onChangeText={email => {
                        setEmail(email)
                    }}
                    style={styles.textInputField} placeholder="Email" />
                <FloatingLabelTextInput
                    value={password}
                    onChangeText={password => {
                        setPassword(password)
                    }}
                    style={styles.textInputField} isSecure={true} placeholder="Пароль" />
                <CustomButton style={styles.button} title="Зарегистрироваться"
                    disabled={validateForEmpty()}
                    onClick={() => signUp()} />
            </View>
        </ScrollView>
    )
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
