import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JobsList from './src/jobList';
import Profile from './src/profile';
import Login from './src/login'
import JobOffer from './src/jobOffer'

export default class unearthed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
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
