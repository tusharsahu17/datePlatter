import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MyContext} from '../MyContext';

const screen1 = ({navigation}) => {
  const {text, setText} = useContext(MyContext);

  return (
    <View>
      <Text style={styles.buttons}>counter : 0</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('screen2', {data: 'false'})}>
        <Text style={styles.buttons}>goto screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default screen1;

const styles = StyleSheet.create({
  buttons: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
});
