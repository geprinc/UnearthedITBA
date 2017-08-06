import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    fontSize: 15,
    paddingTop: 10,
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
    alignSelf: 'flex-start',
    width:60,
    height:60,
    resizeMode:'stretch',
    borderRadius:1000,
  }
});
