import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import CustomRegex from '../../constants/regexType';

import styles from './styles';

/**
 * Validate And Display Message Component.
 *
 * @param {*} value
 * @param {*} name
 * @param {*} [regex=CustomRegex.all]
 * @param {number} [minLength=5]
 * @param {number} [maxLength=50]
 * @returns
 */
function ValidateAndDisplayMessage(value, name, regex = CustomRegex.all, minLength = 5, maxLength = 50) {
  if (!value) {
    return <Text style={styles.error}>* Required</Text>;
  } else if (value.length < minLength) {
    return (
      <Text style={styles.error}>
        Please enter {name} greater than {minLength}
      </Text>
    );
  } else if (value.length > maxLength) {
    return (
      <Text style={styles.error}>
        Please enter {name} less than {maxLength}
      </Text>
    );
  } else if (!value.match(regex)) {
    return <Text style={styles.error}>Please enter your {name} correctly</Text>;
  } else {
    return null;
  }
}

ValidateAndDisplayMessage.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  regex: PropTypes.any,
  minLength: PropTypes.number,
  maxLength: PropTypes.number
};

export default ValidateAndDisplayMessage;
