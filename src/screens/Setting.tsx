import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View>
      <Text style={styles.screenText}>Setting</Text>
      <Image
        style={styles.profilePic}
        source={require('./../assets/setting.png')}
      />
    </View>
  );
};

export default Setting;

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
