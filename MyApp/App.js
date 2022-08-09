import React, {useState} from 'react';
import type { Node } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

global.APIService = Config.APIService;

const App: () => Node = () => {
    const [loggedIn, setloggedIn] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    function LoginScreen({ navigation }) {
        return (
            <Login navigation={navigation} />
        );
    }
    
    function RegisterScreen({ navigation }) {
        return (
            <Register navigation={navigation} />
        );
    }
    
    function WelcomeScreen({ navigation }) {
        return (
            <Welcome navigation={navigation} />
        );
    }
    
    const setItem = async (key, value) => {
        try {
            const setItem = await AsyncStorage.setItem(key, value);
            return setItem;
        } catch (error) {
            console.error(error.message);
        }
        return
    }

    const retrieveItem = async (key) => {
        try {
            const retrievedItem = await AsyncStorage.getItem(key);
            return retrievedItem;
        } catch (error) {
            console.error(error.message);
        }
        return
    }

    const Stack = createNativeStackNavigator();

    React.useEffect(() => {
        retrieveItem('loggedIn').then((value) => {
            setloggedIn(value);
        });
    });

    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={(loggedIn == null || loggedIn == '') ? "Login" : "Welcome"}>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default App;
