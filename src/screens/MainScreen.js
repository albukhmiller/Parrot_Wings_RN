import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native'
import { Container, Content, Label, Header, Icon, Body, Right, Title } from 'native-base';

import { navigateToLoginAction, logoutActionCreator } from "../actions/AuthActions";
import CustomButton from '../../components/CustomButton'

import TransactionItem from '../../components/TransactionItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class MainScreen extends React.Component {

    render() {
        const { isAuthorized, navigation, balance, transactions } = this.props;

        if (!isAuthorized) {
            this.props.navigateToLoginAction()
            navigation.navigate('AuthorizationScreen')
        }
        return (
            <Container style={styles.container}>
                <Header noLeft style={{ backgroundColor: 'white' }}>
                    <Body>
                        <Title style={{ color: 'black' }}>Главный экран</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.logoutAction()}>
                            <Icon name='exit' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <View style={{
                        flexDirection: 'row', alignSelf: 'flex-start'
                    }}>
                        <Label style={styles.balanceLabel}>Баланс: </Label>
                        <Label style={styles.balanceAmountLabel}>{balance} </Label>
                    </View>
                    <CustomButton style={styles.button} title="Создать новую транзакцию"
                        onClick={() => navigation.navigate('CreateTransaction')} />
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
        transactions: state.transReducer.transactions,
    };
};

const mapDispatchToProps = dispatch => ({
    navigateToLoginAction: () => dispatch(navigateToLoginAction(true)),
    logoutAction: () => dispatch(logoutActionCreator())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);    