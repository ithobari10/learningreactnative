import Axios from 'axios'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import { useForm, showMessage } from '../../utils'
import { hideMessage } from 'react-native-flash-message'

const SignUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber : '',
        address : '',
        houseNumber : '',
        city: '',
    });

    const dispatch = useDispatch();
    const {registerReducer, photoReducer} = useSelector( state => state);

    const onSubmit = () => {

        dispatch({type: 'SET_LOADING', value: true});

        const data = {
            ...form,
            ...registerReducer
        };
        
        Axios.post('http://192.168.8.129:8000/api/register', data)
        .then(res => {
            if(photoReducer.isUploadPhoto){
                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer);
    
                Axios.post('http://192.168.8.129:8000/api/user/photo', 
                photoForUpload, 
                {
                    headers: {
                        'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then(resUpload => {
                    console.log('success upload', resUpload);
                })
                .catch(err => {
                    showMessage('upload foto tidak berhasil');
                });
            }

            dispatch({type: 'SET_LOADING', value: false});

            showMessage('Register Success', 'success');
            navigation.replace('SuccessSignUp');
        })
        .catch(err => {
            dispatch({type: 'SET_LOADING', value: false});

            showMessage(err?.response?.data?.message);
        });
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={styles.page}>
                <Header title="Address" subTitle="Make sure it's valid" onBack={() => {navigation.navigate('SignUp');}}  />

                <View style={styles.container}>
                    <TextInput label="Phone No." placeholder="Type your phone number" value={form.phoneNumber} onChange={(value) => setForm('phoneNumber', value)} />
                    <Gap height={16} />
                    <TextInput label="Address" placeholder="Input your address" value={form.address} onChange={(value) => setForm('address', value)} />
                    <Gap height={16} />
                    <TextInput label="House No." placeholder="Type your house Number" value={form.houseNumber} onChange={(value) => setForm('houseNumber', value)}/>
                    <Gap height={16} />
                    <Select label="City" options={['Bandung', 'Jakarta', 'Surabaya']} value={form.city} onSelectChange={(value) => setForm('city', value)} />
                    <Gap height={24} />
                    <Button text="Sign Up Now" onPress={() => { onSubmit();}} />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

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