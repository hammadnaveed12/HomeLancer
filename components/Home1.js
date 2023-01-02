
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen"
import SettingsScreen from './SettingsScreen'
import Bookings from "./Bookings";
import Categories from "./Categories";
import Services from "./Services";
import ChatBox from "./ChatBox";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
  const Tab = createBottomTabNavigator();
 
    return (

      <Tab.Navigator 
        
       screenOptions={({ route }) => ({
        headerShown:false,
      
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            else if (route.name === 'ChatBox') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            }
            else if (route.name === 'Services') {
              iconName = focused ? 'list' : 'list-outline';
            }
            else if (route.name === 'Bookings') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2596be',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ChatBox" component={ChatBox} />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Bookings" component={Bookings} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
        
      </Tab.Navigator>
   

    );
}



