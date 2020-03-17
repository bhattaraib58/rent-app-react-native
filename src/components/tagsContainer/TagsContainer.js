import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './style';

/**
 * Tags Container Component.
 *
 * @param {*} Props { tags }.
 * @returns
 */
function TagsContainer({ tags }) {
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

TagsContainer.propTypes = {
  tags: PropTypes.array
};

export default TagsContainer;
