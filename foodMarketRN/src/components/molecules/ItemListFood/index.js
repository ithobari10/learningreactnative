import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FoodDummy1 } from '../../../assets'
import Rating from '../Rating'

/**
TYPE : 
1. product
2. order-summary
3. in-progress
4. past-orders
*/

const ItemListFood = ({
    image, 
    onPress, 
    price,
    rating, 
    items, 
    type,
    name,
    date,
    status
}) => {
    

    const renderContent = () => {
        switch(type){
            case 'product' :
                return (
                    <>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.price}>IDR {price}</Text>
                    </View>
                    <Rating />
                    </>
                );
            case 'order-summary' : 
                return (
                    <>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>IDR {price}</Text>
                        </View>
                        <Text>{items} items</Text>
                    </>
                );
            case 'in-progress' : 
                return (
                    <>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>{items} items.IDR {price}</Text>
                        </View>
                    </>
                );
            case 'past-orders' : 
                return (
                    <>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.price}>{items} items.IDR {price}</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                );
            default : 
                return (
                    <>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Soup Bumil</Text>
                        <Text style={styles.price}>IDR {price}</Text>
                    </View>
                    <Rating />
                    </>
                );
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                {renderContent()}
            </View>
        </TouchableOpacity>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    container: { flexDirection: 'row', backgroundColor: 'white', paddingVertical: 8, alignItems: 'center' },
    image: { width: 60, height: 60, borderRadius: 8, overflow: 'hidden', marginRight: 12 },
    title: { fontFamily: 'Poppins-Regular', fontSize: 16, color: '#020202' },
    price: { fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8D92A3' },
    items: { fontFamily: 'Poppins-Regular', fontSize: 13, color: '#8D92A3' },
    date: { fontFamily: 'Poppins-Regular', fontSize: 10, color: '#8D92A3' },
    status: { fontFamily: 'Poppins-Regular', fontSize: 10, color: '#D9435E' },
})