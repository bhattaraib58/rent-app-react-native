import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  contentStyle: {
    minHeight: screenHeight,
    minWidth: screenWidth,
  },
});

export default styles;
