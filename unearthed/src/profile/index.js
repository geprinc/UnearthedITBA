import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Image } from 'react-native';

import styles from './styles';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Image style={styles.image} source={{ uri: this.props.imagen}} />
        <Text style={styles.title}>{this.props.nombre}</Text>
        <View style={styles.divider}/>
        <Text style={styles.semiTitle}>Información Personal</Text>
        <Text style={styles.data}>Edad: {this.props.edad}</Text>
        <Text style={styles.data}>Educacion: {this.props.educacion}</Text>
        <TouchableOpacity  style={styles.dataButton} onPress={() => {}}>
          <Text style={styles.textButton}>Actualizar datos</Text>
        </TouchableOpacity>
        <View style={styles.divider}/>
      </View>
    );
  }
}

// <Text style={styles.semiTitle}>Ofertas de negocio generadas</Text>
// <FlatList data={this.props.negocios} renderItem={item => <ItemList item={item} key={item.id} />} />
// <View style={styles.divider}/>
// <Text style={styles.semiTitle}>Aplicaciones a trabajos</Text>
// <FlatList data={this.props.aplicaciones} renderItem={item => <ItemList item={item} key={item.id} />} />
