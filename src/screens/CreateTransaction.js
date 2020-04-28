import React from 'react';

import { Container, Label } from 'native-base';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { connect } from 'react-redux';

import { getSuitableUsersActionCreator, clearSuitableUsers } from '../actions/UserActions'
import { createTransactionActionCreator, } from '../actions/TransactionAction'
import FloatingLabelTextInput from '../components/FloatingLabelTextInput'
import CustomButton from '../components/CustomButton'
import { showError } from '../CustomAlert'

export class CreateTransaction extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isSuggestionsVisible: true,
            isSendDisabled: true
        };
    }

    componentDidUpdate() {
        if (this.props.transError)
            showError('Что-то пошло не так. Повторите отправку позднее', 'Ошибка отправки')
    }

    componentWillUnmount() {
        this.props.clearSuitableUsers()
    }

    validateForEmpty = () => {
        return (this.state.amount && this.state.recipient) ? false : true
    }

    sendFunds() {
        if (this.state.amount > this.props.balance) {
            showError('Превышение баланса', 'Некорретный ввод')
            return
        }

        if (this.state.recipient === this.props.username) {
            showError('Нельзя отправить транзакцию самому себе', 'Некорретный ввод')
            return
        }

        this.props.createTransaction(this.state.recipient, this.state.amount)
    }

    setRecipient(query) {
        this.setState({
            isSuggestionsVisible: false,
            recipient: query
        })
    }

    render() {
        const { balance, filetredUsers } = this.props
    
        return (
            <ScrollView>
                <Container>
                    <View style={{
                        flexDirection: 'row', alignSelf: 'flex-start'
                    }}>
                        <Label style={styles.balanceLabel}>Баланс: </Label>
                        <Label style={styles.balanceAmountLabel}>{balance} </Label>
                    </View>
                    <View style={{ height: 100 }}>
                        <Autocomplete
                            containerStyle={styles.autocompleteContainer}
                            hideResults={!this.state.isSuggestionsVisible}
                            data={filetredUsers}
                            flatListProps={{ nestedScrollEnabled: true }}
                            placeholder="Введите имя пользователя"
                            listStyle={styles.listStyle}
                            value={this.state.recipient}
                            keyExtractor={(item) => item.id}
                            style={styles.autocompleteContainer}
                            onChangeText={text => {
                                this.setState({
                                    recipient: text,
                                    isSuggestionsVisible: true
                                });
                                this.props.getSuitableUsersAction(text);
                            }}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => this.setRecipient(item.name)}>
                                    <Text style={styles.itemSuggestion}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <FloatingLabelTextInput style={styles.textInputField}
                        value={this.state.amount}
                        onChangeText={amount => {
                            this.setState({
                                amount
                            })
                        }}
                        keyboardType="number-pad"
                        placeholder="Сумма перевода" />

                    <CustomButton style={styles.button} title="Отправить"
                        onClick={() => { this.sendFunds() }}
                        disabled={this.validateForEmpty()}
                    />
                </Container>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textInputField: {
        height: 65,
        marginEnd: 30,
        marginStart: 30
    },
    listStyle: {
        height: 130,
        position: 'relative',
        zIndex: 999,
        padding: 0,
    },
    itemSuggestion: {
        fontSize: 16,
        padding: 16
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
        marginTop: 30,
        marginBottom: 10,
        marginStart: 60,
        marginEnd: 60
    },
    autocompleteContainer: {
        marginStart: 12,
        marginEnd: 12,
        height: 60
    },
});

const mapStateToProps = state => {
    return {
        balance: state.userReducer.userInfo.balance,
        username: state.userReducer.userInfo.name,
        filetredUsers: state.userReducer.filteredUser,
        transError: state.commonReducer.error
    };
};

const mapDispatchToProps = dispatch => ({
    getSuitableUsersAction: (filter) => dispatch(getSuitableUsersActionCreator(filter)),
    clearSuitableUsers: () => dispatch(clearSuitableUsers()),
    createTransaction: (name, amount) => dispatch(createTransactionActionCreator(name, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransaction);    
