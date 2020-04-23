import React from 'react';

import { StyleSheet, View } from 'react-native'
import { Text, Left, ListItem, Right } from 'native-base';

export default function CustoTransactionItemmButton(props) {
    return (
        <ListItem style={[styles.container, props.item.amount > 0 ? styles.incomingTransaction : styles.outgoingTransaction ]}>
            <Left>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.usernameText}>{props.item.username}</Text>
                    <Text style={styles.dateText}>{props.item.date}</Text>
                </View>
            </Left>
            <Right>
                <Text style={styles.amountText}>{props.item.amount}</Text>
                <Text style={[styles.amountText, styles.balanceText]}>{props.item.balance}</Text>
            </Right>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 0
    },
    incomingTransaction: {
        backgroundColor: '#5FCD96'
    },
    outgoingTransaction: {
        backgroundColor: '#DA7370'
    },
    amountText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    balanceText: {
        marginTop:10
    },

    usernameText: {
        fontSize: 22,
        fontWeight:'800',
        alignSelf: 'flex-start' ,
        marginLeft: 16,
    },
    dateText: {
        color: 'gray',
        alignSelf: 'flex-start',
        marginLeft: 16,
        fontSize:14, 
    }
})