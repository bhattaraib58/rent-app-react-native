import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const FlatCategoryCardView = ({ flatInfo, flatDetailNavigation, containerStyle = {}, imageStyle = {} }) => {
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
};

export default FlatCategoryCardView;
