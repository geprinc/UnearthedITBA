import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 20
  },
  image: {
    borderRadius: 100,
    backgroundColor: 'transparent',
    width: 100,
    height: 100
  },
  title: {
    color: 'black',
    fontSize: 24,
    marginVertical: 15,
    justifyContent: 'center'
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray'
  },
  semiTitle:{
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 10
  },
  data: {
    fontSize: 16,
    marginVertical: 5,
    marginLeft: 20
  },
  dataButton: {
    width: 180,
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  textButton:{
    textAlign: 'center',
    fontSize: 18
  },
  buttonView: {
    alignItems: 'flex-end',
    marginVertical: 10,
    marginRight: 10
  }
});
