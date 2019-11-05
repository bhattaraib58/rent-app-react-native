import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

/**
 * Custom Button
 *
 * @export
 * @param {*} {
 *   title = 'Enter',
 *   style = {},
 *   textStyle = {},
 *   disable = false,
 *   onPress = () => {},
 * }
 * @returns
 */
export default function Button({
  title = 'Enter',
  style = {},
  textStyle = {},
  disable = false,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, style]}
      disabled={disable}
      onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
