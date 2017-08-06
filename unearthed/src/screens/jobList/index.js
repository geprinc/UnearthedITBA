import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, Text, View, FlatList } from 'react-native';

import Separator from './separator';
import JobItem from './jobItem';
import styles from './styles';
import offersJson from '../../json/ofertas.json';

export default class JobsList extends Component {
  handleCreation = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'BusinessOffer' }));

  openOffer = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'JobOffer' }));

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
          data={offersJson.ofertas}
          renderItem={item => <JobItem item={item.item} onPress={this.openOffer} />}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
