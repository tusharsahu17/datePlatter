import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Maps = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://www.google.com/maps',
        }}
        startInLoadingState={true}
        // renderLoading={() => {
        //   return _renderSpinner();
        // }}
      />
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({});
