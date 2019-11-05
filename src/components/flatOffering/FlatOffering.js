import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

export default function FlatOffering() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="map" size={25} color="blue" />
        </View>

        <Text style={styles.textStyle}>Map View</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="bus" size={25} color="purple" />
        </View>

        <Text style={styles.textStyle}>Transport</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="shield-check-outline" size={25} color="red" />
        </View>

        <Text style={styles.textStyle}>Safety</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.iconContainer}>
          <Icon name="tree" size={25} color="#8ce6ec" />
        </View>

        <Text style={styles.textStyle}>Ecology</Text>
      </View>
    </View>
  );
}
