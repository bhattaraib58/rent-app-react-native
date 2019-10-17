import React from 'react';
import {View, Text} from 'react-native';

import CustomRegex from '../../constants/regexType';
import styles from './styles';

const ValidateAndDisplayMessage = (
  value,
  name,
  regex = CustomRegex.all,
  minLength = 5,
  maxLength = 50,
) => {
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
};

export default ValidateAndDisplayMessage;
