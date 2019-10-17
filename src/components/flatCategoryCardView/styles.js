import {StyleSheet} from 'react-native';
import {iconColor} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 3,
    elevation: 3,

    padding: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    minWidth: 300,
    height: 300,
    borderRadius: 8,
  },
  flatInfo: {
    position: 'absolute',
    bottom: '-15%',
    left: '15%',
    right: '15%',

    width: '70%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: 'black',
    shadowOpacity: 3,
    elevation: 3,
  },
  flatInfoHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  flatInfosubHeader: {},
  iconContainer: {
    padding: 10,
    borderRadius: 150,
    backgroundColor: iconColor,

    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 2,
  },
  iconTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default styles;
