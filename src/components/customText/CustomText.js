import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

/**
 * Create Textbox for view.
 *
 * @param {*} { TextName, textStyle }.
 * @returns
 */
const CustomText = ({ textName, textStyle }) => {
  return <Text style={[styles.textStyle, textStyle]}>{textName}:</Text>;
};

export default CustomText;
