import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#d7ffd5',
    flex: 1
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
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 18,
    color: '#333333',
    margin: 5,
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 12,
    paddingHorizontal:12,
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#ffa22a',
    borderColor: '#ffa22a',
    marginTop: 20,
    borderWidth:5,
    borderRadius:2,
    width: 300
  },
  buttonView: {
    marginTop: 20,
    alignItems: 'center'
  }
});
