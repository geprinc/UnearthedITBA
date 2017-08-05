import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import Separator from './separator';
import JobItem from './jobItem';
import styles from './styles';

const offers = [
  {
      id: 1,
      title: "Sarasa 1",
      requerimientos: "Ninguno",
      categoria: "A"
  },
  {
      id: 1,
      title: "Sarasa 2",
      requerimientos: "Ninguno",
      categoria: "B"
  },
  {
      id: 1,
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
          Ofertas Laborales
        </Text>
        <Separator />
        <FlatList
          data={offers}
          renderItem={item => <JobItem item={item.item}/>}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
