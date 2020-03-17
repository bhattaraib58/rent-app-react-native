import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    zIndex: 20,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
    opacity: 0.5,
    backgroundColor: 'white'
  }
});

export default styles;
