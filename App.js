import { Provider } from 'react-redux';
import React from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import configureStore from './src/store/store'

import AuthorizationScreen from './src/screens/AuthorizationScreen'
import MainScreen from './src/screens/MainScreen'

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
      <Provider store={store}>
        <NavigationContainer theme={navigationContainer}>
          <Stack.Navigator initialRouteName='MainScreen'>
            <Stack.Screen options={{headerShown: false}} name="AuthorizationScreen" component={AuthorizationScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  };
}

const navigationContainer = {
  colors: {
    background: 'white'
  }
};

const store = configureStore()
const Stack = createStackNavigator(); 