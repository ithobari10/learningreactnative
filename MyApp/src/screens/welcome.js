import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar,Button } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AvatarData = {
    image_url: string;
};

const dataList: AvatarData[] = [
    {
        image_url: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
    },
    {
        image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
    {
        image_url:
            'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    },
    {
        image_url:
            'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    },
    {
        image_url:
            'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    },
    {
        image_url:
            'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    },
];

type AvatarComponentProps = {};

Array.prototype.chunk = function (n) {
    if (!this.length) {
        return [];
    }
    return [this.slice(0, n)].concat(this.slice(n).chunk(n));
};

const Welcome: React.FunctionComponent<AvatarComponentProps> = ({navigation}) => {
    return (
        <>
            <ScrollView>
                <Text style={styles.subHeader}>Selamat datang {email}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 30,
                    }}
                >
                    <Avatar
                        size={64}
                        rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
                    />
                </View>
                <View>
                <Button
                    color="secondary"
                    containerStyle={styles.buttonLogin}
                    buttonStyle={{
                        backgroundColor: "#06283D",
                    }}
                    onPress={() => navigation.navigate('Login')}
                >Logout
                </Button>

                </View>


            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    }
})

export default Welcome;