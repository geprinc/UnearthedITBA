import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default class JobOffer extends Component {
  handlePress = item => {};

  render() {
    return (
      <TouchableOpacity style={styles.jobItem} onPress={() => this.handlePress(this.props.item)}>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.subtitle}>{this.props.item.categoria}</Text>
        <View style={styles.divider} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  jobItem: {
    paddingHorizontal: 20,
    backgroundColor: 'black'
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    marginBottom: 5
  },
  subtitle: {
    marginBottom: 10,
    fontSize: 14,
    color: 'gray'
  },
  divider:{
    borderWidth: 1,
    borderColor: 'gray'
  }
});
