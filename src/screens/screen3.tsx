import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MyContext} from './../MyContext';

const screen3 = ({navigation, route}) => {
  const {text, setText} = useContext(MyContext);
  const {counter} = route.params;
  //   const data = true;
  useEffect(() => {
    () => setText(counter);
  }, []);

  return (
    <View>
      <Text style={styles.buttons}>counter :{counter}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('screen1')}>
        <Text style={styles.buttons}>goto screen 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('screen2', {data: true})}>
        <Text style={styles.buttons}>goto screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default screen3;

const styles = StyleSheet.create({
  buttons: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
});
