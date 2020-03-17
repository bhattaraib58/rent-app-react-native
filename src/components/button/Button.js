import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

/**
 * Custom Button.
 *
 * @param {*} Props {
 *   title = 'Enter',
 *   style = {},
 *   textStyle = {},
 *   disable = false,
 *   onPress = () => {},
 * }.
 * @returns
 */
function Button({ title = 'Enter', style = {}, textStyle = {}, disable = false, onPress = () => {} }) {
  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} disabled={disable} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  disable: PropTypes.bool,
  onPress: PropTypes.func
};

export default Button;
