import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconStarOff, IconStarOn } from '../../../assets'

const Rating = () => {
    return (
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                <IconStarOn />
                <IconStarOn />
                <IconStarOn />
                <IconStarOn />
                <IconStarOff />
            </View>
            <Text>4.5</Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: { flexDirection: 'row', alignItems: 'center'},
    starContainer: {flexDirection: 'row', marginRight:5}
})