import React, { Component } from 'react';
import {
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
    this.state = {username: "", password: "", text: ""};
  }

  onPressLoginButton = () => this.setState({text: "hola"});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ingrese su DNI:</Text>
        <Button
  onPress={this.onPressLoginButton()}
  title="Iniciar sesion"
  color="orange" />
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

        // <Image
        //   source={require('../assets/left4dead_logo.png')}/>


        // <TextInput
        // style={{height: 40, width: 200, borderWidth: 0}}
        // onChangeText={(text) => this.setState({username: text})}
        // value={this.state.text}/>

        // <Text style={styles.welcome}>
        //   Ingrese su contraseña:
        // </Text>
        // <TextInput
        // style={{height: 40, width: 200, borderWidth: 0}}
        // onChangeText={(text) => this.setState({password: text})}
        // value={this.state.text}
        // secureTextEntry={true}/>