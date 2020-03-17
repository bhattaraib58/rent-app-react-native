import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

/**
 * Loader Component.
 *
 * @returns
 */
function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default Loader;
