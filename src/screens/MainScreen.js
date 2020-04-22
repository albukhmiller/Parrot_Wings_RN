import React from 'react';
import { Text, View } from 'react-native'
import { connect } from 'react-redux';

import { navigateToLoginAction } from "../actions/AuthActions"

export class MainScreen extends React.Component {

    render() {
        const { isAuthorized, navigation } = this.props;

        console.log(isAuthorized)

        if (!isAuthorized) {
            this.props.navigateToLoginAction()
            navigation.navigate('AuthorizationScreen')
        }
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'red' }}>
                <Text>
                    Try editing me! 🎉
              </Text>
            </View>
        );

    }
}

const mapStateToProps = state => {
    return {
        isAuthorized: state.authReducer.isAuthorized,
    };
};

const mapDispatchToProps = dispatch => ({
    navigateToLoginAction: () => dispatch(navigateToLoginAction(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);    