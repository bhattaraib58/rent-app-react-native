import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

/**
 * Custom Back Navigation with Transparency.
 *
 * @param {*} { Navigation }.
 * @returns
 */
function TranparentBackNavigation({ navigation }) {
  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
      <View style={styles.backNavigate}></View>
    </TouchableOpacity>
  );
}

TranparentBackNavigation.propTypes = {
  navigation: PropTypes.object
};

export default TranparentBackNavigation;
