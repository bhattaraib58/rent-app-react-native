import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

/**
 * Flat Loaction Component.
 *
 * @param {*} Props { locationName }.
 * @returns
 */
function FlatLocation({ locationName }) {
  return (
    <View style={styles.container}>
      <Icon name="location-on" style={styles.textStyle} />
      <Text style={styles.textStyle}>{locationName}</Text>
    </View>
  );
}

FlatLocation.propTypes = {
  locationName: PropTypes.string
};

export default FlatLocation;
