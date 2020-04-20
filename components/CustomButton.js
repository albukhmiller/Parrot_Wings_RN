import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        height: 60
    },
});

export default function CustomButton(props) {
    return (
        <Button style={[props.style, styles.button]} rounded primary
            onPress={props.onClick}>
            <Text>{props.title}</Text>
        </Button>
    ); 
} 