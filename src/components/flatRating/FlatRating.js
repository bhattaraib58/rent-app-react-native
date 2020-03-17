import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

/**
 * Flat Rating Component.
 *
 * @param {*} Props { transport, safety, ecology }.
 * @returns
 */
function FlatRating({ transport, safety, ecology }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Icon name="bus" size={25} color="purple" />
        <Text style={styles.textStyle}>{transport}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="shield-check-outline" size={25} color="red" />
        <Text style={styles.textStyle}>{safety}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="tree" size={25} color="#8ce6ec" />
        <Text style={styles.textStyle}>{ecology}</Text>
      </View>
    </View>
  );
}

FlatRating.propTypes = {
  transport: PropTypes.number.isRequired,
  safety: PropTypes.number.isRequired,
  ecology: PropTypes.number.isRequired
};

export default FlatRating;
