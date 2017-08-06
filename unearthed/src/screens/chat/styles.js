import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7ffd5',
    flex: 1
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  list: {
    height: 475,
  },
  writingBar: {
    flexDirection: 'row',
    width: 200,
    height: 80,
    bottom:0
  },
  writingField: {
    width:300,
    height:50,
    bottom:0
  },
  buttonStyle:{
    textAlign: 'center',
    fontWeight: '500',
    color: 'red',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2
  },
  buttonSend: {
    paddingTop: 12,
    paddingHorizontal:12,
    width: 50,
    height: 50
  },
});
