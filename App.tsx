import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Maps from './src/screens/Maps';
import Setting from './src/screens/Setting';
import Notification from './src/screens/Notification';
import {MyContext} from './src/MyContext';
import {useContext} from 'react';
import screen3 from './src/screens/screen3';
import screen2 from './src/screens/screen2';
import Screen1 from './src/screens/screen1';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const App = () => {
  // const {text, setText} = useContext(MyContext);
  const [text, setText] = useState(0);

  return (
    <MyContext.Provider value={{text, setText}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen2" component={screen2} />
          <Stack.Screen name="screen3" component={screen3} />
          {/* <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
    // <MyContext.Provider value={{text, setText}}>
    //   <NavigationContainer>
    //     <stack.Navigator>
    //       {/* <Tab.Screen
    //       name="Maps"
    //       component={Maps}
    //       options={{headerShown: false}}
    //     /> */}
    //       <stack.Screen
    //         name="Screen1"
    //         component={Setting}
    //         options={{headerShown: false}}
    //       />
    //       <stack.Screen
    //         name="Screen2"
    //         component={Notification}
    //         options={{headerShown: false}}
    //       />
    //       <stack.Screen
    //         name="Screen3"
    //         component={screen3}
    //         options={{headerShown: false}}
    //       />
    //       {/* <Tab.Screen
    //       name="Home"
    //       component={Home}
    //       options={{headerShown: false}}
    //     /> */}
    //     <stack.Navigator>
    //   </NavigationContainer>
    // </MyContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
