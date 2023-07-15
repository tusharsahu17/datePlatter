import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PieChart, LineChart} from 'react-native-chart-kit-chz';

const Graph = ({chartData, pieChart}) => {
  return (
    <View style={styles.graphContainer}>
      <View style={styles.pieText}>
        <View>
          {pieChart ? (
            <Text
              style={[
                styles.stripeText,
                styles.marginLefts,
                styles.marginTops,
              ]}>
              Order
            </Text>
          ) : (
            <Text
              style={[
                styles.stripeText,
                styles.marginLefts,
                styles.marginTops,
              ]}>
              Demographics
            </Text>
          )}
        </View>

        <View style={[styles.pieText, styles.filterView]}>
          {pieChart ? (
            <Text
              style={[
                styles.marginTops,
                styles.marginLefts,
                styles.marginLefts,
              ]}>
              {'               '}Oct
              <Text
                style={[
                  styles.stripeText,
                  styles.marginLefts,
                  styles.marginTops,
                ]}>
                {'    '} V
              </Text>
            </Text>
          ) : (
            <Text style={[styles.marginTops]}>
              Month
              <Text
                style={[
                  styles.stripeText,
                  styles.marginLefts,
                  styles.marginTops,
                ]}>
                {'    '} V
              </Text>
            </Text>
          )}
          <Text style={[styles.piefilterView]}> ...</Text>
        </View>
      </View>
      {pieChart ? (
        <View style={styles.pieText}>
          <PieChart
            style={{width: 250, height: 260}}
            items={chartData}
            innerRadius={75}
            outerRadius={105}
            padAngle={0}
          />
          <View style={styles.piePercentage}>
            <Text style={[styles.percentageText]}> * 52.4%</Text>
            <Text style={styles.marginLefts}>Delivered</Text>
            <View style={styles.line} />
            <Text style={[styles.percentageText]}> * 16.4%</Text>
            <Text style={styles.marginLefts}>Transit</Text>
            <View style={styles.line} />
            <Text style={[styles.percentageText]}> * 31.2%</Text>
            <Text style={styles.marginLefts}>Orders</Text>
          </View>
        </View>
      ) : (
        <View style={styles.marginTops}>
          <LineChart
            data={{
              labels: [
                'week 1',
                'week 2',
                'week 3',
                'week 4',
                'week 5',
                'week 6',
              ], // Bottom Labels
              datasets: [
                {
                  data: ['0', '10', '30', '20', '14', '23'], // Data for Chart
                  amount: ['0', '10', '30', '20', '14', '23'], //Amount show on the ToolTip
                  color: '#000531', // Chart Line Color
                  currency: 'IND', //Currency to show before amount ,
                },
                //You can add another set here with different data
              ],
            }}
            onPointPress={(d: any) => {}}
            selectedDotColor="#000"
            width={350}
            height={200}
            chartConfig={{
              decimalPlaces: 0,
            }}
            bezier //Command this for stright line chart
          />
        </View>
      )}
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
  line: {
    width: 80,
    marginTop: 10,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'lightblue',
  },
  graphContainer: {
    width: 380,
    height: 300,
    marginVertical: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
  },
  marginLefts: {
    marginLeft: 30,
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
    marginLeft: 125,
  },
  piefilterView: {
    fontSize: 30,
    marginLeft: 20,
  },
});
