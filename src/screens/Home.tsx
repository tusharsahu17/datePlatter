import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

import React, {useEffect, useState} from 'react';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profilePic}
            source={require('./../assets/crish.jpg')}
          />
          <Text style={styles.nameText}>
            Nehirika Singh <Text style={styles.idCodeText}>525468753</Text>
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.stripeText}>Delhi, India</Text>
        </View>
        <View style={styles.stripeContainer}>
          <Text style={styles.stripeText}>Insight</Text>
          <Text style={styles.stripeText}>Clients</Text>
          <Text style={styles.stripeText}>Team</Text>
        </View>
      </View>
      <View style={styles.graphContainer}></View>
      <View style={styles.graphContainer}></View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'grey',
  },
  imageContainer: {
    marginTop: 20,
    height: 180,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
  },
  line: {
    width: 100,
    marginTop: 10,
    borderWidth: 1,
    alignContent: 'center',
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  idCodeText: {
    fontSize: 14,
    color: 'lightblue',
    fontWeight: 'normal',
  },
  profilePic: {
    height: 90,
    width: 90,
    borderWidth: 2,
    borderRadius: 45,
    borderColor: 'white',
  },
  stripeContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'lightblue',
    justifyContent: 'space-between',
  },
  stripeText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  graphContainer: {
    width: 380,
    height: 250,
    borderWidth: 1,
    marginTop: 8,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
  },
});
