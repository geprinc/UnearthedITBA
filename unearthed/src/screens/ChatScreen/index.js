import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, Image} from 'react-native';

import ChatBubble from './ChatBubble/index'

const messages = [
  {
      key: 1,
      senderId: "40129158",
      timeReceived: 1501970745,
      converserName:"Ricardo Estevez",
      messageContent: "Buenos días Aurelio, estamos interesados en tu oferta sobre la produccion de indumentaria para la mina."
  },
  {
      key: 2,
      senderId: "40129134",
      timeReceived: 1501971545,
      converserName:"Esteban Gonzales",
      messageContent: "Hola, me alegra saber eso! Mi única preocupación es nuestro volumen de producción"
  },
  {
      key: 3,
      senderId: "40129134",
      timeReceived: 1501971745,
      converserName:"Esteban Gonzales",
      messageContent: "Podríamos discutir eso más en detalle?"
  },
  {
      key: 4,
      senderId: "40129158",
      timeReceived: 1501972745,
      converserName:"Esteban Gonzales",
      messageContent: "Por supuesto, si te parece podemos arreglar una reunión en algún momento de la semana próxima."
  },
  {
      key: 5,
      senderId: "40129134",
      timeReceived: 1501973745,
      converserName:"Esteban Gonzales",
      messageContent: "Buenisimo. Mi teléfono es 01155230906"
  },
  {
      key: 6,
      senderId: "40129158",
      timeReceived: 1501973800,
      converserName:"Esteban Gonzales",
      messageContent: "Perfecto, hablamos!"
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
        <FlatList style={styles.list} data={messages} renderItem={item => <ChatBubble item={item.item}/>} />
        <View style= {styles.writingBar}>
          <TextInput
            style={styles.writingField}
            onChangeText={(text) => this.setState({message: text})}
            value={this.state.message} >
          </TextInput>
          <TouchableOpacity
          onPress={this.onPressLoginButton}>
          <Image source={require('../assets/send_icon.png')} style={styles.buttonSend}/>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  list: {
    height: 475,
  },
  writingBar: {
    flexDirection: 'row',
    width: 200,
    height: 80,
    bottom:0
  },
  writingField: {
    width:330,
    height:50,
    bottom:0
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
    width: 50,
    height: 50
  },
});