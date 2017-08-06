import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d7ffd5'
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
      backgroundColor: '#ffa22a',
      borderColor: '#ffa22a'
    },
    buttonRegister: {
      paddingTop: 7,
      paddingHorizontal:7,
      fontSize: 16,
      backgroundColor: '#69e269',
      borderColor: '#69e269'
    }
});
