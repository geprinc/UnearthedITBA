import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

export default class JobOfferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "", description: "", category: "", requisites: ""}
  }
  onPressLoginButton = (username, password) => this.setState({text: "hola"})

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}
        value={this.state.title}>
        </Text>

        <Text>
          Descripción del puesto:
        </Text>
        <Text style={styles.description}
          value={this.state.description>
        </Text>

        <Button
          onPress={this.onPressLoginButton(this.getState(username, password))}
          title="Aplicar a esta oferta"
          color="#FF6219"
          accessibilityLabel="Iniciar sesión"/>

        <Text style={styles.description}>
          {this.state.text}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});