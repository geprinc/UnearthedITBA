import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class JobItem extends Component {
  handlePress = item => {};

  render() {
    return (
      <TouchableOpacity style={styles.jobItem} onPress={() => this.handlePress(this.props.item)}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.subtitle}>{this.props.item.categoria}</Text>
      </TouchableOpacity>
    );
  }
}
