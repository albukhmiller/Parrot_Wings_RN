import { Provider } from 'react-redux';
import React from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/store/store'

import AuthorizationScreen from './src/screens/AuthorizationScreen'
import MainScreen from './src/screens/MainScreen'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore} from 'redux-persist';
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
        <PersistGate persistor={persistor}>
        <NavigationContainer theme={navigationContainer}>
          <Stack.Navigator initialRouteName='MainScreen'>
            <Stack.Screen options={{ headerShown: false }} name="AuthorizationScreen" component={AuthorizationScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Главный экран' }} />
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  };
}

const navigationContainer = {
  colors: {
    background: 'white'
  }
};

const persistor = persistStore(store);
const Stack = createStackNavigator(); 