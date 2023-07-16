import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Maps from './src/screens/Maps';
import Setting from './src/screens/Setting';
import Notification from './src/screens/Notification';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Maps"
          component={Maps}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
