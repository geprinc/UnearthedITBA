import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

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
