import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Image} from 'react-native';

import ChatBubble from './ChatBubble/index'

const messages = [
  {
      id: 1,
      senderId: "40129158",
      timeReceived: 1501970745,
      converserName:"Ricardo Estevez",
      messageContent: "Buenos días Aurelio, estamos interesados en tu oferta sobre la produccion de indumentaria para la mina."
  },
  {
      id: 2,
      senderId: "40129134",
      timeReceived: 1501971545,
      converserName:"Esteban Gonzales",
      messageContent: "Hola, me alegra saber eso! Mi única preocupación es nuestra capacidad de producción"
  },
  {
      id: 3,
      senderId: "40129134",
      timeReceived: 1501971745,
      converserName:"Esteban Gonzales",
      messageContent: "Podríamos discutir eso más en detalle?"
  },
  {
      id: 4,
      senderId: "40129158",
      timeReceived: 1501972745,
      converserName:"Esteban Gonzales",
      messageContent: "Por supuesto, si te parece podemos arreglar una reunión en algún momento de la semana próxima."
  },
  {
      id: 5,
      senderId: "40129134",
      timeReceived: 1501973745,
      converserName:"Esteban Gonzales",
      messageContent: "Buenisimo"
  },
  {
      id: 6,
      senderId: "40129158",
      timeReceived: 1501973800,
      converserName:"Esteban Gonzales",
      messageContent: "Abrazo grande mostro"
  },
];

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ""};
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Esteban Gonzales
        </Text>
        <FlatList data={messages} renderItem={item => <ChatBubble item={item.item}/>} />
        <View style= {styles.writingBar}>
          <TextInput
          style={styles.writingField}
          onChangeText={(text) => this.setState({message: text})}
          value={this.state.message} >

          </TextInput>

          <TouchableOpacity
        onPress={this.onPressSendMessage}>
            <Text style={[styles.buttonStyle, styles.buttonSend]}>
              fle
            </Text>
          </TouchableOpacity>
        </View>
        
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
    fontSize: 30,
    textAlign: 'center',
  },
  writingBar: {
    flex:1,
    width: 200,
    height: 60,
  },
  writingField: {
  },
  buttonStyle:{
    textAlign: 'center',
    fontWeight: '500',
    color: 'red',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2
  },
  buttonSend: {
    paddingTop: 12,
    paddingHorizontal:12,
    fontSize: 18,
    backgroundColor: '#FF6100',
    borderColor: '#FF6100'
  },
});