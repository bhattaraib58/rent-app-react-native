import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

/**
 * Flat Location Component.
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
