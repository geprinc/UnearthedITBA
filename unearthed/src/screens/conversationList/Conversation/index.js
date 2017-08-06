import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import profileImage from '../../../assets/profile1.png';

export default class Conversation extends Component {
  handlePress = () => this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'Chat' }));

  render() {
    return (
      <TouchableOpacity style={styles.conversation} onPress={this.handlePress}>
        <View style={styles.conversation}>
          <Image source={profileImage} style={styles.picture}/>
          <View style={styles.conversationText}>
            <Text style={styles.name}>{this.props.item.converserName}</Text>
            <Text style={styles.lastMessage}>{this.props.item.lastMessagePreview}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
