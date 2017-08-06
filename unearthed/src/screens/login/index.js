import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

import usersJson from '../../json/users.json';
import styles from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: "", incorrect: false, users: usersJson.users };
  }

  onPressLoginButton = () => {
    if(this.state.username === "" || this.state.password === ""){
      this.setState({incorrect: true});
    } else {
      const user= this.state.users.filter(user => user.nombre === this.state.username && user.pswd === this.state.password);
      if(user) {
        this.props.navigation.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home', params: [user: user] })
          ]
        }))
    } else {
      this.setState({incorrect: true});
    }
  }
};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ingrese su DNI:</Text>
        <TextInput
          style={{height: 40, width: 200, borderWidth: 0}}
          onChangeText={(text) => this.setState({username: text, incorrect: false})}
          value={this.state.username}
        />
        <Text style={styles.welcome}>Ingrese su contraseña:</Text>
        <TextInput
          style={{height: 40, width: 200, borderWidth: 0}}
          onChangeText={(text) => this.setState({password: text, incorrect: false})}
          value={this.state.password}
          secureTextEntry={true}
        />
        {this.state.incorrect &&
          <Text style={{marginVertical: 20, color: 'red', fontSize: 20 }}>Algun campo fue incorrecto</Text>}
        <TouchableOpacity onPress={this.onPressLoginButton}>
          <Text style={[styles.buttonStyle, styles.buttonLogin]}>
            INICIAR SESION
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressRegisterButton}>
          <Text style={[styles.buttonStyle, styles.buttonRegister]}>
            REGISTRARSE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
