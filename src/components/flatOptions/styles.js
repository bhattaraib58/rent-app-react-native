import { StyleSheet } from 'react-native';
import { selectedTextColor } from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    left: '8%',
    right: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10
  },
  buttonStyle: {
    minWidth: 220,
    backgroundColor: selectedTextColor
  },
  buttonTextStyle: {
    color: '#FFFFFF'
  },
  normalButtonStyle: {
    minWidth: 220
  }
});

export default styles;
