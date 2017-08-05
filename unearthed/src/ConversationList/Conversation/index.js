import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

export default class Conversation extends Component {
  handlePress = item => {};

  render() {
    return (
      <TouchableOpacity style={styles.conversation} onPress={() => this.handlePress(this.props.item)}>
        <View style={styles.conversation}>
          <Image source={require('../../assets/profile.png')} style={styles.picture}/>
          <View style={styles.conversationText}>
            <Text style={styles.name}>{this.props.item.converserName}</Text>
            <Text style={styles.lastMessage}>{this.props.item.lastMessagePreview}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  conversation: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffe8a5',
    height: 100,
    margin: 5,
    borderRadius: 4,
  },
  conversationText: {
    marginLeft: 10,
    width:200,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    marginBottom: 5
  },
  lastMessage: {
    marginBottom: 10,
    fontSize: 18,
    color: 'gray'
  },
  divider:{
    borderWidth: 1,
    borderColor: 'gray'
  },
  picture:{
    width:90,
    height:90,
    resizeMode:'stretch',
    borderRadius:1000,
  }
});