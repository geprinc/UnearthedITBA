import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';

import Separator from './separator';
import JobItem from './jobItem';
import styles from './styles';

const offers = [
  {
      id: 1,
      title: "Ingeniero en sistemas Sr",
      requerimientos: "Ninguno",
      categoria: "informatica"
  },
  {
      id: 1,
      title: "Guardia Nocturno zona Explosiones",
      requerimientos: "Ninguno",
      categoria: "Seguridad"
  },
  {
      id: 1,
      title: "Administrador de negocios",
      requerimientos: "Ninguno",
      categoria: "Finanzas"
  }
];

export default class JobsList extends Component {
  handleCreation = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'JobOffer' }));

  render() {
    return (
      <View style={styles.container}>
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
