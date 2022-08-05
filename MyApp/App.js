import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Config from './src/config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login';
import Register from './src/screens/register';
import Welcome from './src/screens/welcome';

global.APIService = Config.APIService;
if (typeof Loggedin == 'undefined') global.Loggedin = false;
if (typeof email == 'undefined') global.email   = '';

function LoginScreen({ navigation }) {
    return (
        <Login navigation={ navigation }/>
    );
}

function RegisterScreen({ navigation }) {
    return (
        <Register navigation={ navigation }/>
    );
}

function WelcomeScreen({ navigation }) {
    return (
        <Welcome navigation={ navigation }/>
    );
}

const Stack = createNativeStackNavigator();

const initialRoute = (Loggedin) ? "Welcome" : "Login";

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="{{initialRoute}}">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
