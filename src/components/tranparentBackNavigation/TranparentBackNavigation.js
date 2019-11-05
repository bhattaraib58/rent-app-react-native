import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * Custom Back Navigation with Transparency.
 *
 * @param {*} { Navigation }.
 * @returns
 */
const TranparentBackNavigation = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.container}>
      <View style={styles.backNavigate}></View>
    </TouchableOpacity>
  );
};

export default TranparentBackNavigation;
