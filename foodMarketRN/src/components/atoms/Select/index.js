import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-community/picker'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Select = ({ label, value, options, onSelectChange }) => {
    const [selected, setSelected] = useState('Bandung');

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) => { setSelected(itemValue); onSelectChange(itemValue); }}>
                    {
                        options.map((item, key) => {
                            return <Picker.Item label={item} value={item} />;
                        })
                    }

                </Picker>
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: { fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202' },
    input: { borderWidth: 1, borderColor: '#020202', borderRadius: 8, paddingHorizontal: 2, paddingVertical: 0, color: '#8D92A3', fontSize: 14 },
})