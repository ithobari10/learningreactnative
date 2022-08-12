import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInputRN style={styles.input} placeholder={props.placeholder}></TextInputRN>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
    input: {borderWidth: 1, borderColor:'#020202', borderRadius: 8, padding:10, color:'#8D92A3', fontSize:14},
})