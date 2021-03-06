import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    width:330,
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