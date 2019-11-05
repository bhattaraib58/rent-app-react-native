import {View, Text} from 'react-native';
import React from 'react';

import styles from './style';

export default function TagsContainer({tags}) {
  return (
    <View style={styles.tagsContainer}>
      {tags.map((tag, key) => {
        return (
          <Text style={styles.tags} key={key}>
            {tag}
          </Text>
        );
      })}
    </View>
  );
}
