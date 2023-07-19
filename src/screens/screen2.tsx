import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MyContext} from '../MyContext';

const screen2 = ({navigation, route}) => {
  const [count, setCount] = useState(0);
  const {text, setText} = useContext(MyContext);
  const {data} = route.params;

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <View>
      <Text style={styles.buttons}>counter :{count}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('screen1')}>
        <Text style={styles.buttons}>goto screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('screen3', {
            counter: count,
          })
        }>
        <Text style={styles.buttons}>goto screen 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default screen2;

const styles = StyleSheet.create({
  buttons: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
});
