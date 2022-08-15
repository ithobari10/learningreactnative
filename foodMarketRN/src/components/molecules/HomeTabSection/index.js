import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: '#020202',
            height: 3,
            width: 0.6
        }}
        style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor:'#F2F2F2', borderBottomWidth:1 }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{
                fontFamily: 'Poppins-Medium',
                color: focused ? '#020202' : '#8D92A3'
            }}>
                {route.title}
            </Text>
        )}
    />
);

const newTaste = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8}}>
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
        </View>
    )
};

const popular = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8}}>
            <ItemListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
        </View>
    )
};

const Recommended = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8}}>
            <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy3} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy2} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
        </View>
    )
};

const renderScene = SceneMap({
    1: newTaste,
    2: popular,
    3: Recommended,
});

const HomeTabSection = ({navigation}) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{backgroundColor: 'white'}}
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({
    
})