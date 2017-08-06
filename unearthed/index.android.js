import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JobsList from './src/screens/jobList';
import Profile from './src/screens/profile';
import Login from './src/screens/login'
import JobOffer from './src/screens/jobOffer'
import ConversationList from './src/screens/conversationList'
import Navigator from './src/screens';

export default class unearthed extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#d7ffd5',
  }
});

AppRegistry.registerComponent('unearthed', () => unearthed);
