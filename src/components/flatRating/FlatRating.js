import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

export default function FlatRating({ transport, safety, ecology }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Icon name="bus" size={25} color="purple" />
        <Text style={styles.textStyle}>{transport}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="shield-check-outline" size={25} color="red" />
        <Text style={styles.textStyle}>{safety}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon name="tree" size={25} color="#8ce6ec" />
        <Text style={styles.textStyle}>{ecology}</Text>
      </View>
    </View>
  );
}
