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

const inProgress = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
            <ItemListFood type='in-progress' items={2} price='289.000' name="Sop Bumil" image={FoodDummy1} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='in-progress' items={2} price='289.000' name="Sop Bumil" image={FoodDummy2} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='in-progress' items={2} price='289.000' name="Sop Bumil" image={FoodDummy3} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='in-progress' items={2} price='289.000' name="Sop Bumil" image={FoodDummy1} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='in-progress' items={2} price='289.000' name="Sop Bumil" image={FoodDummy2} onPress={() => navigation.navigate('OrderDetail')} />
        </View>
    )
};

const pastOrders = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
            <ItemListFood type='past-orders' items={2} price='289.000' name="Sop Bumil" date="Jun 12, 14:00" status="Cancelled" image={FoodDummy3} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='past-orders' items={2} price='289.000' name="Sop Bumil" date="Jun 12, 14:00" status="" image={FoodDummy2} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='past-orders' items={2} price='289.000' name="Sop Bumil" date="Jun 12, 14:00" status="" image={FoodDummy1} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='past-orders' items={2} price='289.000' name="Sop Bumil" date="Jun 12, 14:00" status="Cancelled" image={FoodDummy2} onPress={() => navigation.navigate('OrderDetail')} />
            <ItemListFood type='past-orders' items={2} price='289.000' name="Sop Bumil" date="Jun 12, 14:00" status="" image={FoodDummy1} onPress={() => navigation.navigate('OrderDetail')} />
        </View>
    )
};

const renderScene = SceneMap({
    1: inProgress,
    2: pastOrders
});

const OrderTabSection = ({navigation}) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' }
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

export default OrderTabSection

const styles = StyleSheet.create({
    
})