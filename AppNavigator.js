import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Destinations from './screens/Destinations';
import Destination from './screens/Destination';

import SettingScreen from './screens/Setting';

import HotDestinationScreen from './screens/HotDestination';

const DestinationStack = createStackNavigator({
    Destinations: {
        screen: Destinations
    },
    Destination: {
        screen: Destination
    }

});
DestinationStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: <Ionicons name='home-outline' size = '150%' color='blue'/>
}
const HotDestinationStack = createStackNavigator({
    HotDestinationScreen
})
HotDestinationStack.navigationOptions = {
    tabBarLabel: 'Hot',
    tabBarIcon: <Ionicons name='flame-outline' size = '150%' color='orange'/>
}
const SettingStack = createStackNavigator({
    SettingScreen
})
SettingStack.navigationOptions = {
    tabBarLabel: 'Cài đặt',
    tabBarIcon: <Ionicons name='settings-outline' size = '150%' color='gray'/>
}
const AppNavigator = createBottomTabNavigator({
    DestinationStack,
    HotDestinationStack,
    SettingStack
})
export default AppNavigator;