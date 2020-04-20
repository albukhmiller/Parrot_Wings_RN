import React from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NavigationContainer theme={navigationContainer}>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
            title: 'Регистрация'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  };
}

const navigationContainer = {
  colors: {
    background: 'white'
  }
};

const Stack = createStackNavigator();