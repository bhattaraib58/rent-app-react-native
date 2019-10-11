import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
import FavoriteFlat from '../favoriteFlat/FavoriteFlat';
import FlatLocation from '../flatLocation/FlatLocation';
import FlatFacilities from '../flatFacilities/FlatFacilities';

export default function FlatInfoCardView({flatInfo, flatDetailNavigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableWithoutFeedback
          onPress={() =>
            flatDetailNavigation.navigate('FlatDetails', {flatInfo: flatInfo})
          }>
          <Image source={{uri: flatInfo.images[0]}} style={styles.image} />
        </TouchableWithoutFeedback>

        <FavoriteFlat />

        <FlatLocation locationName={flatInfo.location} />
      </View>

      <View style={styles.flatInfo}>
        <Text style={styles.price}>
          {flatInfo.Currency} {flatInfo.priceMin} - {flatInfo.priceMax}/
          {flatInfo.payType}
        </Text>

        <FlatFacilities {...flatInfo} />
      </View>
    </View>
  );
}
