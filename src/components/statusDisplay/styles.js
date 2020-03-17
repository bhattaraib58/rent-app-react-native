import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  messageContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  messageText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 20
  },
  error: {
    backgroundColor: 'red'
  },
  success: {
    backgroundColor: 'green'
  }
});

export default styles;
