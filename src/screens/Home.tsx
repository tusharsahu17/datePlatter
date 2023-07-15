import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Graph from './Graph';
import React, {useEffect, useState} from 'react';
import {PieChart} from 'react-native-chart-kit-chz';

const Home = () => {
  const chartData = [
    {
      key: 1,
      value: 100,
      svg: {fill: 'orange'},
      arc: {cornerRadius: 0},
      label: 'Cplex',
    },
    {
      key: 2,
      value: 260,
      svg: {fill: 'lightblue'},
      arc: {cornerRadius: 0},
      label: 'Jsum',
    },
    {
      key: 3,
      value: 158,
      svg: {fill: 'red'},
      arc: {cornerRadius: 0},
      label: 'Jsum',
    },
  ];
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
      <Graph chartData={chartData} />
      <View style={styles.graphContainer}>
        <View style={styles.pieText}>
          <View>
            <Text
              style={[
                styles.stripeText,
                styles.marginLefts,
                styles.marginTops,
              ]}>
              Order
            </Text>
          </View>
          <View style={[styles.pieText, styles.filterView]}>
            <Text style={[styles.marginTops]}>
              Oct
              <Text
                style={[
                  styles.stripeText,
                  styles.marginLefts,
                  styles.marginTops,
                ]}>
                {'    '} V
              </Text>
            </Text>
            <Text style={[styles.piefilterView]}> ...</Text>
          </View>
        </View>
        <View style={styles.pieText}>
          <PieChart
            style={{width: 250, height: 260}}
            items={chartData}
            innerRadius={75}
            outerRadius={105}
            padAngle={0}
          />
          <View style={styles.piePercentage}>
            <Text style={[styles.percentageText]}>* 52.4%</Text>
            <Text style={styles.marginLefts}>Delivered</Text>
            <Text style={[styles.percentageText]}>* 16.4%</Text>
            <Text style={styles.marginLefts}>Transit</Text>
            <Text style={[styles.percentageText]}>* 31.2%</Text>
            <Text style={styles.marginLefts}>Orders</Text>
          </View>
        </View>
      </View>
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
    height: 300,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
  },
  marginLefts: {
    marginLeft: 20,
  },
  marginTops: {
    paddingTop: 20,
  },
  pieText: {
    flexDirection: 'row',
  },
  piePercentage: {
    marginTop: 40,
    flexDirection: 'column',
  },
  percentageText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  filterView: {
    marginLeft: 200,
  },
  piefilterView: {
    fontSize: 30,
    marginLeft: 20,
  },
});
