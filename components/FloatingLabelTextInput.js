import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20
    }
});

export default function FloatingLabelTextInput(props) {
    return (
        <Form>
            <Item floatingLabel style={props.style}>
                <Label style={styles.textInput}>{props.placeholder} </Label>
                <Input style={styles.textInput}
                    secureTextEntry={props.isSecure}
                    value = {props.value}
                    keyboardType={props.keyboardType}
                    onChangeText={props.onChangeText} />
            </Item>
        </Form>
    );
}