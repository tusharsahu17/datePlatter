import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
// import Maps from './src/screens/Maps';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Maps" component={Maps} /> */}
        <Tab.Screen name="Set" component={set} />
        <Tab.Screen name="Sens" component={Sens} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Sens = () => {
  return (
    <View>
      <Text>Sittings</Text>
    </View>
  );
};

const set = () => {
  return (
    <View>
      <Text>Sittings</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
