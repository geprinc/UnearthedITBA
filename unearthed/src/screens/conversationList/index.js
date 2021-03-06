import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { NavigationActions } from 'react-navigation';

import Conversation from './Conversation'

const conversations = [
  {
      key: 1,
      converserId: "40129158",
      converserName:"Esteban Gonzales",
      lastMessagePreview: "Buenos días Aurelio, estamos interesados en tu oferta..."
  },
  {
      key: 2,
      converserId: "40129152",
      converserName:"Tito Rodriguez",
      lastMessagePreview: "Muchas gracias!"
  },
  {
      key: 3,
      converserId: "40129134",
      converserName:"Ricardo Estevez",
      lastMessagePreview: "Y dónde completaste tus estudios?"
  }
];

export default class ConversationList extends Component {
  handlePress = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Chat' }));

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Mensajes:
        </Text>
        <FlatList data={conversations} renderItem={item => <Conversation item={item.item} onPress={this.handlePress} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7ffd5'
  },
  title: {
    fontSize: 30,
    marginLeft: 20
  }
});
