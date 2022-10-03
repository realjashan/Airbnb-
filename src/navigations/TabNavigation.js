import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import ExploreNavigation from './ExploreNavigation';
import PostScreen from '../screens/PostScreen/PostScreen';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
      }}>
      <Tab.Screen
        name="Explore"
         component={ExploreNavigation}
        // component={PostScreen}

        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Fontisto name="search" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FeatherIcon name="message-square" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <EvilIcon name="user" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
