import {Image, StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react';
import React from 'react';
import {MyContext} from './../MyContext';

const Notification = () => {
  const {text, setText} = useContext(MyContext);
  return (
    <View>
      <Text style={styles.screenText}>{text}</Text>
      <Image
        style={styles.profilePic}
        source={require('./../assets/bell.png')}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  screenText: {
    fontSize: 50,
    color: 'black',
    fontWeight: '700',
    marginTop: '75%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profilePic: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 45,
    borderColor: 'white',
  },
});
