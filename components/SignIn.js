import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import FloatingLabelTextInput from './FloatingLabelTextInput'
import CustomButton from './CustomButton'

import { login } from "../networking/AuthService"

export default function SignIn({ navigation }) {
    const [email, password] = useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/ic_logo.png")} />
                <FloatingLabelTextInput style={styles.textInputField} placeholder="Имя пользователя"
                    onChangeText={email => setEmail(email)} />
                <FloatingLabelTextInput style={styles.textInputField} isSecure={true} placeholder="Пароль"
                    onChangeText={password => setPassword(password)} />
                <CustomButton style={styles.button} title="Войти"
                    onClick={() => {
                        console.log(email, password)
                        login(email, password)
                            .then(json => console.log(json))
                            .catch(error => console.log(error));
                    }} />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
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