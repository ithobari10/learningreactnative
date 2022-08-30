import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { showMessage, useForm } from '../../utils';
const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const [photo, setPhoto] = useState('');

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch({
            type : 'SET_REGISTER',
            value: form
        });

        navigation.navigate('SignUpAddress');

    }

    const addPhoto = () => {
        launchImageLibrary({
            quality:0.5,
            maxWidth:200,
            maxHeight:200
        }, (response)=> {

            if(response.didCancel || response.error){
                showMessage('anda tidak memilih foto');
            }else{
                const contentImage = response.assets[0];
                const source = {uri : contentImage.uri};
                const dataImage = {
                    uri : contentImage.uri,
                    type : contentImage.type,
                    name : contentImage.fileName,
                };

                setPhoto(source);
                dispatch({type: 'SET_PHOTO', value: dataImage});
                dispatch({type: 'SET_UPLOADED_STATUS', value: true});
            }
        })
    } 
    
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.page}>
                <Header title="Sign Up" subTitle="Register and eat" onBack={() => {navigation.navigate('SignIn');}}  />

                <View style={styles.container}>
                    <View style={styles.photo}>
                        <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
                            <View style={styles.borderPhoto}>
                                <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
                                {photo ? (
                                    <Image source={photo} style={styles.photoContainer} />
                                ) : (
                                    <View style={styles.photoContainer}>
                                        <Text style={styles.addPhoto}>Add Photo</Text>
                                    </View>
                                )}
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TextInput label="Full Name" placeholder="Type your Fullname" value={form.name} onChangeText={(value) => setForm('name', value)} />
                    <Gap height={16} />
                    <TextInput label="Email Address" placeholder="Input Email Address" value={form.email} onChangeText={(value) => setForm('email', value)} />
                    <Gap height={16} />
                    <TextInput label="Password" placeholder="Input Password" value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry />
                    <Gap height={24} />
                    <Button 
                        text="Continue" 
                        onPress={() => { 
                            onSubmit();

                        }} />
                </View>
            </View>
        </ScrollView>
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
    photo: {alignItems: 'center', marginTop: 26, marginBottom:16},
    borderPhoto: {
        borderWidth:1, 
        borderColor: '#8D92A3', 
        width: 110, 
        height: 110, 
        borderRadius: 110, 
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: 90, 
        height: 90, 
        borderRadius: 90, 
        backgroundColor: '#F0F0F0', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    addPhoto: {
        fontSize: 14, 
        fontFamily: 'Poppins-Light', 
        color: '#8D92A3', 
        textAlign: 'center'
    }
    
})