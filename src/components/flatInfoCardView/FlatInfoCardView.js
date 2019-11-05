import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import FavoriteFlat from '../favoriteFlat/FavoriteFlat';
import FlatLocation from '../flatLocation/FlatLocation';
import FlatFacilities from '../flatFacilities/FlatFacilities';

/**
 *  Flat Info Card View.
 *
 * @param {*} Props { flatInfo, flatDetailNavigation, containerStyle = {}, imageStyle = {} }.
 * @returns
 */
function FlatInfoCardView({ flatInfo, flatDetailNavigation, containerStyle = {}, imageStyle = {} }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.imageContainer}>
        <TouchableWithoutFeedback onPress={() => flatDetailNavigation.navigate('FlatDetails', { flatInfo: flatInfo })}>
          <Image source={{ uri: flatInfo.images[0] }} style={[styles.image, imageStyle]} />
        </TouchableWithoutFeedback>

        <FavoriteFlat flatInfo={flatInfo} />

        <FlatLocation locationName={flatInfo.location} />
      </View>

      <View style={styles.flatInfo}>
        <Text style={styles.price}>
          {flatInfo.Currency} {flatInfo.priceMin} - {flatInfo.priceMax}/{flatInfo.payType}
        </Text>

        <FlatFacilities {...flatInfo} />
      </View>
    </View>
  );
}

FlatInfoCardView.propTypes = {
  flatInfo: PropTypes.object.isRequired,
  flatDetailNavigation: PropTypes.object.isRequired,
  containerStyle: PropTypes.object,
  imageStyle: PropTypes.object
};

export default FlatInfoCardView;
