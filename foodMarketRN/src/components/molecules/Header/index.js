import React from 'react'
import { StyleSheet, Text, TouchableOpacityBase, View } from 'react-native'
import { Iconback } from '../../../assets'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.back}>
                <Iconback />
            </View>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subtitle}>{props.subTitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'white', 
        paddingHorizontal: 24, 
        paddingTop: 30, 
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: { fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202' },
    subtitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' },
    back: { padding: 16, marginRight: 16, marginLeft:-10 }
})