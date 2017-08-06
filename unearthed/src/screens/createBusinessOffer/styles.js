import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    alignItems: 'center',
    height: 400
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  subtitle:{
    fontWeight: 'bold',
    fontSize: 22,
    margin: 10,
  },
  description: {
    fontSize: 18,
    color: '#333333',
    margin: 5,
  },
  buttonApply: {
    textAlign: 'center',
    paddingTop: 12,
    paddingRight:12,
    paddingLeft:12,
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#30d12e',
    borderColor: '#30d12e',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2,
    width: 300,
    bottom: 20
  },
});
