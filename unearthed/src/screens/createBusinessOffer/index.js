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

export default class CreateBusinessOfferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""}
  }
  onPressApplyButton = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Crear oferta de trabajo
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

        <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={this.onPressApplyButton}>
          <Text style={styles.buttonApply}>
            CREAR OFERTA DE TRABAJO
          </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    height: 400
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
    bottom: 20
  },
});