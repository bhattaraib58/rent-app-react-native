import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

/**
 * Create Text for view.
 *
 * @param {*} { TextName, textStyle }.
 * @returns
 */
function CustomText({ textName, textStyle }) {
  return <Text style={[styles.textStyle, textStyle]}>{textName}:</Text>;
}

CustomText.propTypes = {
  textName: PropTypes.string.isRequired,
  textStyle: PropTypes.object
};

export default CustomText;
