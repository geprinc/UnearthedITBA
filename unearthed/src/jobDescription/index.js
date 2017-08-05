/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class JobDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hola</Text>
        <Text style={styles.text}>Descripcion</Text>
        <TouchableOpacity title="Aplicar para el trabajo" onPress={() => {}} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    backgroundColor: 'green'
  }
});
