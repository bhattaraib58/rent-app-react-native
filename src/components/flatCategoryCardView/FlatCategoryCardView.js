import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

/**
 * Flat Category Card View.
 *
 * @param {*} Props { flatInfo, flatDetailNavigation, containerStyle = {}, imageStyle = {} }.
 * @returns
 */
function FlatCategoryCardView({ flatInfo, flatDetailNavigation, containerStyle = {}, imageStyle = {} }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.imageContainer}>
        <TouchableWithoutFeedback onPress={() => flatDetailNavigation.navigate('FlatDetails', { flatInfo: flatInfo })}>
          <Image source={{ uri: flatInfo.images[0] }} style={[styles.image, imageStyle]} />
        </TouchableWithoutFeedback>

        <View style={styles.flatInfo}>
          <View>
            <Text style={styles.flatInfoHeader}>Smart Houses</Text>
            <Text style={styles.flatInfosubHeader}>23 Houses and Apartments</Text>
          </View>

          <View style={styles.iconContainer}>
            <Icon name="arrow-forward" style={styles.iconTextStyle} />
          </View>
        </View>
      </View>
    </View>
  );
}

FlatCategoryCardView.propTypes = {
  flatInfo: PropTypes.object.isRequired,
  flatDetailNavigation: PropTypes.object.isRequired,
  containerStyle: PropTypes.object,
  imageStyle: PropTypes.object
};

export default FlatCategoryCardView;
