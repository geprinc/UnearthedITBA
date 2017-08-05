import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", text: ""};
  }

  onPressLoginButton = () => this.setState({text: "hola"});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ingrese su DNI:</Text>
        <TextInput
        style={{height: 40, width: 200, borderWidth: 0}}
        onChangeText={(text) => this.setState({username: text})}
        value={this.state.username}/>

        <Text style={styles.welcome}>Ingrese su contraseña:</Text>
        <TextInput
        style={{height: 40, width: 200, borderWidth: 0}}
        onChangeText={(text) => this.setState({password: text})}
        value={this.state.password}
        secureTextEntry={true}/>

        <TouchableOpacity
        onPress={this.onPressLoginButton}>
          <Text style={[styles.buttonStyle, styles.buttonLogin]}>
            INICIAR SESION
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onPressRegisterButton}>
          <Text style={[styles.buttonStyle, styles.buttonRegister]}>
            REGISTRARSE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
