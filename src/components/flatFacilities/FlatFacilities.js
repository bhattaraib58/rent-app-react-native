import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import React from 'react';

import { subTextColor } from '../../constants/color';
import styles from './styles';

export default function FlatFacilities({ bed, bathRoom, area }) {
  return (
    <View style={styles.flatDetailIcon}>
      <View style={styles.facilitiesContainer}>
        <Icon name="bed" size={25} color={subTextColor} />
        <Text style={styles.textStyle}> {bed} Bed</Text>
      </View>

      <View style={styles.facilitiesContainer}>
        <Icon name="bath" size={25} color={subTextColor} />
        <Text style={styles.textStyle}> {bathRoom} Bath</Text>
      </View>

      <View style={styles.facilitiesContainer}>
        <Icon name="home" size={25} color={subTextColor} />
        <Text style={styles.textStyle}>{area}</Text>
      </View>
    </View>
  );
}
