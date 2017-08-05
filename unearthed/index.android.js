import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Profile from './src/profile/index';

export default class unearthed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile
          imagen="https://k42.kn3.net/taringa/4/1/3/9/1/1/3/danielgarcia2010/7AF.jpg"
          nombre="Guido"
          edad={22}
          educacion="Universitaria en Progreso"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('unearthed', () => unearthed);
