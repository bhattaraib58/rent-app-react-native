import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  image: {
    backgroundColor: 'blue',
    width: screenWidth,
    height: '100%'
  },
  slideIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: '35%',
    right: '65%'
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)'
  },
  activeIndicator: {
    width: 15,
    height: 15,
    borderRadius: 50
  },
  slideIndicatorIcon: {
    padding: 10,
    borderRadius: 50
  }
});

export default styles;
