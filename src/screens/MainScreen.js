import React from 'react';
import { Label } from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native'

import { navigateToLoginAction } from "../actions/AuthActions"

import { Container, Text, Left, ListItem, Right } from 'native-base';

const data = [
    {
        id: 1,
        recipient: "123123",
        date: '20.03.2020',
        balance: 500,
        amount: 33
    },
    {
        id: 2,
        recipient: "12333123",
        date: '20.03.2020',
        balance: 500,
        amount: 33
    },
    {
        id: 3,
        recipient: "123",
        date: '20.03.2020',
        balance: 500,
        amount: 33
    },
    {
        id: 4,
        recipient: "555",
        date: '20.03.2020',
        balance: 500,
        amount: 33
    },
]
export class MainScreen extends React.Component {

    renderItem = ({ item }) => {
        return (
            <ListItem>
                <Left>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ alignSelf: 'flex-start' }}>{item.recipient}</Text>
                        <Text style={{ alignSelf: 'flex-start' }}>{item.date}</Text>
                    </View>
                </Left>
                <Right>
                    <Text note>{item.amount}</Text>
                    <Text note>{item.balance}</Text>
                </Right>
            </ListItem>
        );
    }
    render() {
        const { isAuthorized, navigation, balance } = this.props;

        if (!isAuthorized) {
            this.props.navigateToLoginAction()
            navigation.navigate('AuthorizationScreen')
        }
        return (
            <Container>
                <View style={{
                    flexDirection: 'row', alignSelf: 'flex-start'
                }}>
                    <Label style={styles.balanceLabel}>Баланс: </Label>
                    <Label style={styles.balanceAmountLabel}>{balance} </Label>
                </View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />

            </Container>
        );

    }
}

const styles = StyleSheet.create({
    balanceLabel: {
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    balanceAmountLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginVertical: 10,
    }
});

const mapStateToProps = state => {
    return {
        isAuthorized: state.authReducer.isAuthorized,
        balance: state.userReducer.userInfo.balance,
    };
};

const mapDispatchToProps = dispatch => ({
    navigateToLoginAction: () => dispatch(navigateToLoginAction(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);    