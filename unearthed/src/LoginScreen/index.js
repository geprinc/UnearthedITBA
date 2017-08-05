import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", text: ""};
  }

  onPressLoginButton = () => this.setState({text: "hola"});

  render() {
    return (
      <View style={styles.container}>
              <Image
          source={require('../assets/left4dead_logo.png')}/>

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
          <Text style={styles.buttonLogin}>
            INICIAR SESION
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onPressRegisterButton}>
          <Text style={styles.buttonRegister}>
            REGISTRARSE
          </Text>
        </TouchableOpacity>
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
  buttonLogin: {
    textAlign: 'center',
    paddingTop: 12,
    paddingRight:12,
    paddingLeft:12,
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#FF6100',
    borderColor: '#FF6100',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2,
  },
  buttonRegister: {
    textAlign: 'center',
    paddingTop: 7,
    paddingRight:7,
    paddingLeft:7,
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#75ccff',
    borderColor: '#75ccff',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2,
  },
});




        