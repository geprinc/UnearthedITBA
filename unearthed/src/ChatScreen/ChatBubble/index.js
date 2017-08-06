import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

export default class ChatBubble extends Component {
  handlePress = item => {};

  render() {
    return (
      <View style={this.props.item.senderId === "40129158"? styles.leftMessage : styles.rightMessage}>
        
        {this.props.item.senderId == "40129158" && <Image source={require('../../assets/profile1.png')} style={styles.picture}/>}
        <View style={styles.bubble}>
          <Text style={styles.text}>{this.props.item.messageContent}</Text>
        </View>
        {this.props.item.senderId == "40129134" && <Image source={require('../../assets/profile2.png')} style={styles.picture}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#ffe8a5',
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  leftMessage: {
    flexDirection: 'row',
    margin: 5,
  },
  rightMessage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    margin: 5,
  },
  text: {
    paddingTop: 5,
    color: 'black',
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