import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

export default class ChatBubble extends Component {
  handlePress = item => {};

  render() {
    return (
      <View style={this.props.item.senderId === "40129158"? styles.leftMessage : styles.rightMessage}>
        {this.props.item.senderId == "40129158" &&
          <Image source={require('../../../assets/profile1.png')} style={styles.picture}/>}
        <View style={styles.bubble}>
          <Text style={styles.text}>{this.props.item.messageContent}</Text>
        </View>
        {this.props.item.senderId == "40129134" &&
          <Image source={require('../../../assets/profile2.png')} style={styles.picture}/>}
      </View>
    );
  }
}
