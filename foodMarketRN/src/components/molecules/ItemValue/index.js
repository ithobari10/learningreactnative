import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemValue = ({label, value, labelColor='#8D92A3', valueColor='#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label(labelColor)}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {flexDirection: 'row', justifyContent: 'space-between'},
    label: (labelColor) => ({fontSize: 14, fontFamily: 'Poppins-Regular', color: labelColor}),
    value: (valueColor) => ({fontSize: 14, fontFamily: 'Poppins-Regular', color: valueColor}),
})