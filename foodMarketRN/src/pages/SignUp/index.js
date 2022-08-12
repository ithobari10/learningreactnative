import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Button, Gap } from '../../components'

const SignUp = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Register and eat"  />

            <View style={styles.container}>
                <View>
                    <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>
                </View>

                <TextInput label="Full Name" placeholder="Type your Fullname" />
                <Gap height={16} />
                <TextInput label="Email Address" placeholder="Input Email Address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Input Password"/>
                <Gap height={24} />
                <Button text="Continue" />
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {flex: 1},
    container : {
        backgroundColor: 'white', 
        paddingHorizontal: 24, 
        paddingVertical: 26, 
        marginTop:24,
        flex: 1
    },
    photoContainer: {width: 90, height: 90, borderRadius: 90, backgroundColor: '#F0F0F0', padding: 24},
    addPhoto: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3', textAlign: 'center'}
    
})