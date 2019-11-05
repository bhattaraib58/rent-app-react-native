import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';

export default function FlatLocation({locationName}) {
  return (
    <View style={styles.container}>
      <Icon name="location-on" style={styles.textStyle} />
      <Text style={styles.textStyle}>{locationName}</Text>
    </View>
  );
}
