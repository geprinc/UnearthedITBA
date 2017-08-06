import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import JobOffer from './jobOffer/index'

const offers = [
  {
      key: 1,
      title: "Sarasa 1",
      requerimientos: "Ninguno",
      categoria: "A"
  },
  {
      key: 1,
      title: "Sarasa 2",
      requerimientos: "Ninguno",
      categoria: "B"
  },
  {
      key: 1,
      title: "Sarasa 3",
      requerimientos: "Ninguno",
      categoria: "C"
  }
];

export default class JobsList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Ofertas Laborales:
        </Text>
        <FlatList data={offers} renderItem={item => <JobOffer item={item.item}/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'red',
    color: 'black'
  }
});
