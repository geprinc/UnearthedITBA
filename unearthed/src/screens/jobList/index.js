import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';

import Separator from './separator';
import JobItem from './jobItem';
import styles from './styles';

const offers = [
  {
      key: 1,
      title: "Sarasa 1",
      requerimientos: "Ninguno",
      categoria: "A"
  },
  {
      key: 2,
      title: "Sarasa 2",
      requerimientos: "Ninguno",
      categoria: "B"
  },
  {
      key: 3,
      title: "Sarasa 3",
      requerimientos: "Ninguno",
      categoria: "C"
  }
];

export default class JobsList extends Component {
  handleCreation = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'JobOffer' }));

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.tradeButton} onPress={this.handleCreation}>
          <Text style={styles.text}>Crear Oferta de Negocio</Text>
        </TouchableOpacity>
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
