import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 5
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    buttonStyle:{
      textAlign: 'center',
      fontWeight: '500',
      color: 'white',
      marginTop: 20,
      borderWidth:5,
      borderRadius:2
    },
    buttonLogin: {
      paddingTop: 12,
      paddingHorizontal:12,
      fontSize: 18,
      backgroundColor: '#FF6100',
      borderColor: '#FF6100'
    },
    buttonRegister: {
      paddingTop: 7,
      paddingHorizontal:7,
      fontSize: 16,
      backgroundColor: '#75ccff',
      borderColor: '#75ccff'
    }
});
