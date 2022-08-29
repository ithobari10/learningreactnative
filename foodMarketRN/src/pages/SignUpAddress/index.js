import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Select, Button, Gap } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../utils'
import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber : '',
        address : '',
        houseNumber : '',
        city: '',
    });

    const dispatch = useDispatch();
    const registerReducer = useSelector( state => state.registerReducer);

    const onSubmit = () => {
        const data = {
            ...form,
            ...registerReducer
        };
        
        Axios.post('http://192.168.1.3:8000/api/register', data)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
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