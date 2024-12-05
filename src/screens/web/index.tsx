import {SafeAreaView} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {styles} from './style';

const Web = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://testcase.myideasoft.com/#!'}}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

export default Web;
