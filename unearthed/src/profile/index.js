import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class unearthed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.item.imagen} />
        <Text style={styles.}>{this.props.item.nombre}</Text>
        <View style={styles.divider}/>
        <Text>Información Personal</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    backgroundColor: 'transparent'
  }
});
