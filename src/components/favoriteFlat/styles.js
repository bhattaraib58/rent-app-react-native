import {StyleSheet} from 'react-native';
import {iconColor} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  iconStyle: {
    color: iconColor,
    fontSize: 35,
    fontWeight: 'bold',
    padding: 40,
  },
});

export default styles;
