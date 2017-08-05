import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ConversationList from './src/ConversationList'
import JobsList from './src/jobList/index';
import Profile from './src/profile/index';
import LoginScreen from './src/LoginScreen'
import JobOfferScreen from './src/JobOfferScreen'

export default class unearthed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('unearthed', () => unearthed);
