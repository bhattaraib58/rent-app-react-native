import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Button(props) {
  const {title = 'Enter', style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, style]}>
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
