import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native'
import { Container, Label } from 'native-base';

import { navigateToLoginAction } from "../actions/AuthActions"
import TransactionItem from '../../components/TransactionItem';

export class MainScreen extends React.Component {

    render() {
        const { isAuthorized, navigation, balance, transactions } = this.props;

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
                    data={transactions}
                    renderItem={({ item, index }) => (
                        <TransactionItem item={item} />
                    )}
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
        transactions: state.transReducer.transactions
    };
};

const mapDispatchToProps = dispatch => ({
    navigateToLoginAction: () => dispatch(navigateToLoginAction(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);    