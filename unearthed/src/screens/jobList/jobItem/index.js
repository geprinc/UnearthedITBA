import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class JobItem extends Component {
  handlePress = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'JobOffer' }));

  render() {
    return (
      <TouchableOpacity style={styles.jobItem} onPress={() => this.handlePress}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.subtitle}>{this.props.item.categoria}</Text>
      </TouchableOpacity>
    );
  }
}
