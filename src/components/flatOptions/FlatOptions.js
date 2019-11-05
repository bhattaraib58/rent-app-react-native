import { View } from 'react-native';
import React from 'react';

import { CONTACT, BOOK } from '../../constants/text';
import Button from '../button/Button';
import styles from './styles';

/**
 * Flat Options Component.
 *
 * @returns
 */
function FlatOptions() {
  return (
    <View style={styles.container}>
      <Button title={CONTACT} style={styles.normalButtonStyle} />
      <Button title={BOOK} style={styles.buttonStyle} textStyle={styles.buttonTextStyle} />
    </View>
  );
}

export default FlatOptions;
