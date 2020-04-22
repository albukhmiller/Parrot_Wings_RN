import { Container } from "native-base"
import { StyleSheet } from 'react-native'

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import React from 'react';
import { connect } from 'react-redux';

export class AuthorizatonScreen extends React.Component {

    render() {
        const { isLoginForm } = this.props

        return (
            <Container style={styles.container}>
                {isLoginForm ? <SignIn /> : <SignUp />}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#fff',
    }
});

const mapStateToProps = state => {
    return {
        isLoginForm: state.authReducer.isLoginForm
    };
};

const mapDispatchToProps = dispatch => ({
    cheskIsUserLoggedIn: () => dispatch(isUserLoggedIn(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizatonScreen);    
