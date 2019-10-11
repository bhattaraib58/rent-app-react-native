import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 2,

    padding: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  flatDetailIcon: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 300,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  flatInfo: {
    margin: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  iconSize: {
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
});

export default styles;
