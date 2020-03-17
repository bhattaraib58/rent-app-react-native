import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

/**
 * Status Display Component.
 *
 * @param {*} { Message, messageType }.
 * @returns
 */
function StatusDisplay({ message, messageType }) {
  return message ? (
    <View style={[styles.messageContainer, messageType === 'error' ? styles.error : styles.success]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  ) : null;
}

StatusDisplay.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string
};

export default StatusDisplay;
