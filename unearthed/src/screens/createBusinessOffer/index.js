import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default class BusinessOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""}
  }
  onPressApplyButton = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Home' }));

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Crear oferta de negocio
        </Text>

        <Text style={styles.subtitle}>
          Título:
        </Text>
        <TextInput
        style={{height: 40, width: 350, borderWidth: 0, margin: 10}}
        onChangeText={(text) => this.setState({title: text})}
        value={this.state.title} />

        <Text style={styles.subtitle}>
          Descripción:
        </Text>
        <TextInput
        style={{height: 40, width: 350, borderWidth: 0, margin: 10}}
        onChangeText={(text) => this.setState({title: text})}
        value={this.state.description} />

        <View style={[styles.container, styles.buttonContainer]}>
        <TouchableOpacity
        onPress={this.onPressApplyButton}>
          <Text style={styles.buttonApply}>
            CREAR OFERTA DE NEGOCIO
          </Text>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
