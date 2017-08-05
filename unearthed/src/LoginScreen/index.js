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

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""}
  }
  onPressLoginButton = (username, password) => this.setState({text: "hola"})

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}/>
        <Text style={styles.welcome}>
          Ingrese su DNI:
        </Text>
        <TextInput
        style={{height: 40, width: 200, borderWidth: 0}}
        onChangeText={(text) => this.setState({username: text})}
        value={this.state.text}/>

        <Text style={styles.welcome}>
          Ingrese su contraseña:
        </Text>
        <TextInput
        style={{height: 40, width: 200, borderWidth: 0}}
        onChangeText={(text) => this.setState({password: text})}
        value={this.state.text}
        secureTextEntry={true}/>

        <Button
  onPress={this.onPressLoginButton(this.getState(username, password))}
  title="Iniciar sesión"
  color="#FF6219"
  accessibilityLabel="Iniciar sesión"/>

        <Text style={styles.welcome}>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});