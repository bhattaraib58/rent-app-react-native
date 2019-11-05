import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  formContainer: {
    marginBottom: 40
  },
  inputGroup: {
    margin: 10
  },
  signUpMessageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  signUpMessageText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 20
  },
  signUpError: {
    backgroundColor: 'red'
  },
  signUpSuccess: {
    backgroundColor: 'green'
  },
  error: {
    marginHorizontal: 10,
    color: 'red',
    fontSize: 15,
    lineHeight: 20
  },
  signupContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupPreText: {
    color: '#324F80',
    fontSize: 17
  },
  linkText: {
    color: '#324F80',
    fontWeight: 'bold',
    fontSize: 20
  },
  buttonStyle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '300',

    borderRadius: 8,
    opacity: 0.9,
    elevation: 1,

    backgroundColor: '#F7BE4F',
    borderColor: '#F7BE4F',

    paddingHorizontal: 10,
    paddingVertical: 14,
    margin: 10,

    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default styles;
