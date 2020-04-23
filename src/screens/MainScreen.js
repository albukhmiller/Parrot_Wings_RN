import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native'
import { Container, Content, Label } from 'native-base';

import { navigateToLoginAction } from "../actions/AuthActions";
import CustomButton from '../../components/CustomButton'

import TransactionItem from '../../components/TransactionItem';

export class MainScreen extends React.Component {

    render() {
        const { isAuthorized, navigation, balance, transactions } = this.props;

        if (!isAuthorized) {
            this.props.navigateToLoginAction()
            navigation.navigate('AuthorizationScreen')
        }
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{
                        flexDirection: 'row', alignSelf: 'flex-start'
                    }}>
                        <Label style={styles.balanceLabel}>Баланс: </Label>
                        <Label style={styles.balanceAmountLabel}>{balance} </Label>
                    </View>
                    <CustomButton style={styles.button} title="Создать новую транзакцию"
                        onClick={() => console.log('qweqwe')} />
                    <FlatList
                        data={transactions}
                        renderItem={({ item }) => (
                            <TransactionItem item={item} />
                        )}
                        keyExtractor={item => item.id}
                    />
                </Content>
            </Container>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
    },
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
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        marginStart: 60,
        marginEnd: 60
    },
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