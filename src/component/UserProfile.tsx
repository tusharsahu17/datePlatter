import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UserProfile = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.useNameStyle}>{title}</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('./../assets/crish.jpg')}
        />
      </View>
      <View style={styles.likeSection}>
        <Image
          style={styles.likeLogo}
          source={require('./../assets/heart.jpg')}
        />
        <Text style={styles.plusLogo}>+</Text>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    height: 350,
    borderWidth: 1,
    marginBottom: 30,
  },
  useNameStyle: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
  },
  imageContainer: {
    // height: 200, width: 200
    marginTop: 30,
  },
  tinyLogo: {
    height: '90%',
    width: '100%',
  },
  plusLogo: {
    fontSize: 30,
    marginBottom: 30,
  },
  likeLogo: {
    height: 20,
    width: 20,
    marginLeft: 30,
    marginTop: 10,
    marginRight: 15,
  },
  likeSection: {
    flexDirection: 'row',
    bottom: 30,
  },
});
