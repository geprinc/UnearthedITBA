import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

export default class JobOfferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Administrador de seguridad",
      description: "El trabajo consiste en el dia a dia de coordinar las operaciones entre los distintos guardianes de la galaxia que quieren que no nos roben a nosotros que somos los buenos y no contaminamos.", 
      requisites: "Educacion primaria completa", 
      categories: "Seguridad, recursos humanos"}
  }
  onPressApplyButton = () => {};

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

        <TouchableOpacity
        onPress={this.onPressApplyButton}>
          <Text style={styles.buttonApply}>
            APLICAR A ESTA OFERTA
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',

    backgroundColor: '#F5FCFF',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  subtitle:{
        fontWeight: 'bold',

    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 18,
    color: '#333333',
    margin: 5,
  },
  buttonApply: {
    textAlign: 'center',
    paddingTop: 12,
    paddingRight:12,
    paddingLeft:12,
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#30d12e',
    borderColor: '#30d12e',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2,
    width: 300,
  },
});