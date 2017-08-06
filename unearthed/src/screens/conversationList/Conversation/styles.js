import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  conversation: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffe8a5',
    flex: 1,
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
