import {textColor} from '../../constants/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 15,

    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation: 3,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: textColor,
  },
});

export default styles;
