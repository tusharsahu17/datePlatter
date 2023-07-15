import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit-chz';

const Graph = ({chartData}) => {
  return (
    <View style={styles.graphContainer}>
      <View style={styles.pieText}>
        <View>
          <Text
            style={[styles.stripeText, styles.marginLefts, styles.marginTops]}>
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
  );
};

export default Graph;

const styles = StyleSheet.create({
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
