import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Image } from 'react-native';

import imagen from '../../assets/left4dead_logo.png'
import styles from './styles';

export default class Profile extends Component {
  render() {
    const {params} =this.props.navigation.state;
    return (
      <View>
        <View style={styles.header}>
          <Image style={styles.image} source={imagen} />
          <Text style={styles.title}>Guido Princ</Text>
        </View>
        <View style={styles.divider}/>
        <Text style={styles.semiTitle}>Información Personal</Text>
        <Text style={styles.data}>Edad: 21</Text>
        <Text style={styles.data}>Educacion: Universitario en Progreso</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity  style={styles.dataButton} onPress={() => {}}>
            <Text style={styles.textButton}>Actualizar datos</Text>
          </TouchableOpacity>
        </View>
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
