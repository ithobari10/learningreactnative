import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput
} from 'react-native';
import { ThemeProvider, createTheme, Input, Button } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = createTheme({
    components: {
        Button: {
            raised: true,
        },
    },
});

const styles = StyleSheet.create({
    top: {
        flex: 1,
        padding: 20,
        margin: 10,
        backgroundColor: "#06283D",
        borderWidth: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 20,
        color: '#fff'
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonLogin: {
        borderRadius: 8,
        backgroundColor: "#1363DF",
    },
    buttonRegister: {
        borderRadius: 8,
        backgroundColor: "#47B5FF",
    },
});

const Login = ({ navigation }) => {
    const input = React.createRef();

    return (
        <SafeAreaView >
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <ThemeProvider theme={theme}>
                    <View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 50,
                                    fontWeight: 'bold',
                                    color: '#1363DF',
                                    textAlignVertical: "center",
                                    textAlign: "center",
                                    marginTop: 15,
                                    marginBottom: 15
                                }} >MyApp</Text>
                        </View>
                        <View style={styles.top}>
                            <Text style={{ color: 'white', textAlignVertical: "center", textAlign: "center", marginTop: 0, marginBottom: 8 }} >Login</Text>

                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                            />
                            <Button
                                color="secondary"
                                containerStyle={styles.buttonLogin}
                                buttonStyle={styles.buttonLogin}
                                onPress={() => navigation.navigate('Welcome')}
                            >Login
                            </Button>
                            <Text style={{ color: 'white', textAlignVertical: "center", textAlign: "center", marginTop: 15, marginBottom: 15 }} >- Atau -</Text>

                            <Button
                                color="secondary"
                                containerStyle={styles.buttonRegister}
                                buttonStyle={styles.buttonRegister}
                                onPress={() => navigation.navigate('Register')}
                            >Daftar
                            </Button>
                        </View>

                    </View>
                </ThemeProvider>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;