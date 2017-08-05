import React, { Component } from 'react';
import { View } from 'react-native';

export default class Separator extends Component {
  render() {
    return (
      <View style={{
        height: 1,
        backgroundColor: 'gray',
      }}/>
    );
  }
}
