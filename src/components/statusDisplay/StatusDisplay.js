import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

/**
 *
 *
 * @param {*} { message, messageType }
 * @returns
 */
const StatusDisplay = ({message, messageType}) => {
  return message ? (
    <View
      style={[
        styles.messageContainer,
        messageType === 'error' ? styles.error : styles.success,
      ]}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  ) : null;
};

export default StatusDisplay;
