import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Button, Gap} from '../../components'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput label="Email Address" placeholder="Input Email Address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Input Password"/>
                <Gap height={24} />
                <Button text="Sign In" />
                <Gap height={12} />
                <Button text="Create New Account" bgcolor="#8D92A3" color="#FFFFFF" onPress={() => {navigation.navigate('SignUp');}} />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {flex: 1},
    container : {
        backgroundColor: 'white', 
        paddingHorizontal: 24, 
        paddingVertical: 26, 
        marginTop:24,
        flex: 1
    }
})