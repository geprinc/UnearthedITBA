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

export default class JobOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Administrador de seguridad",
      description: "El trabajo consiste en el dia a dia de coordinar las operaciones entre los distintos guardianes de la galaxia que quieren que no nos roben a nosotros que somos los buenos y no contaminamos.",
      requisites: "Educacion primaria completa",
      categories: "Seguridad, recursos humanos"}
  }
  onPressApplyButton = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Home' }));

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Text style={styles.subtitle}>
          Descripción del puesto:
        </Text>
        <Text style={styles.description}>
          {this.state.description}
        </Text>
        <Text style={styles.subtitle}>
          Requisitos:
        </Text>
        <Text style={styles.description}>
          {this.state.requisites}
        </Text>
        <Text style={styles.subtitle}>
          Categorias:
        </Text>
        <Text style={styles.description}>
          {this.state.categories}
        </Text>
        <TouchableOpacity style={styles.buttonView} onPress={this.onPressApplyButton}>
          <Text style={styles.buttonText}>
            APLICAR A ESTA OFERTA
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
