import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-community/picker'

const Select = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker >
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="V" value="V" />
                </Picker>
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
    input: {borderWidth: 1, borderColor:'#020202', borderRadius: 8, paddingHorizontal:2, paddingVertical:0, color:'#8D92A3', fontSize:14},
})