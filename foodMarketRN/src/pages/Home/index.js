import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { FoodDummy1, FoodDummy2, FoodDummy3 } from '../../assets'
import { Gap } from '../../components/atoms'
import { FoodCard, HomeProfile, HomeTabSection } from '../../components/molecules'

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeProfile />
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodCardContainer}>
                            <Gap width={24} />
                            <FoodCard image={FoodDummy1} />
                            <FoodCard image={FoodDummy2} />
                            <FoodCard image={FoodDummy3} />
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.tabContainer}>
                    <HomeTabSection navigation={navigation} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page : {flex: 1},
    foodCardContainer: {flexDirection: 'row', marginVertical: 24},
    tabContainer: { height:350 }
})