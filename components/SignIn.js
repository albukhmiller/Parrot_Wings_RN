import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyleSheet, Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import FloatingLabelTextInput from './FloatingLabelTextInput'
import CustomButton from './CustomButton'

import { loginAction } from "../src/actions/AuthActions"
import { navigateToLoginAction } from "../src/actions/AuthActions"

export default function SignIn() {

    const dispatch = useDispatch();
    const signIn = () => {
        dispatch(loginAction('t3@vs.ru', '1234qwer'))
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/ic_logo.png")} />
                <FloatingLabelTextInput style={styles.textInputField} placeholder="Имя пользователя"
                />
                <FloatingLabelTextInput style={styles.textInputField} isSecure={true} placeholder="Пароль" />
                <CustomButton style={styles.button} title="Войти"
                    onClick={() => {
                        // email = 't3@vs.ru';
                        // password = '1234qwer'
                        console.log('t3@vs.ru', '1234qwer')
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
