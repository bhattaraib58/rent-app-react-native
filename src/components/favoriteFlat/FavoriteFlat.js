import PropTypes from 'prop-types';
import { View } from 'react-native';
import Snackbar from 'react-native-snackbar';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import withConnect from '../../hoc/withConnect';

import { checkDataExists } from '../../utils/checkDataExists';

/**
 * Favorite Flat Star Component.
 *
 * @param {*} Props { addFlatToFavorite, removeFlatFromFavorite, favoriteFlat, flatInfo }.
 * @returns
 */
function FavoriteFlat({ addFlatToFavorite, removeFlatFromFavorite, favoriteFlat, flatInfo }) {
  const [favoriteFlatAdded, setFavoriteFlatAdded] = useState(false);

  /**
   * Set Flat As Added/Removed From Favorite List.
   *
   */
  const setFavouriteAdded = () => {
    setFavoriteFlatAdded(!favoriteFlatAdded);

    Snackbar.show({
      title: !favoriteFlatAdded ? 'Added To Favorites' : 'Removed From Favorites',
      color: 'white',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        title: 'UNDO',
        color: 'green'
      }
    });

    !favoriteFlatAdded ? addFlatToFavorite(flatInfo) : removeFlatFromFavorite(flatInfo);
  };

  useEffect(() => {
    const flatFavouritedStatus = checkDataExists(favoriteFlat.favoriteFlat, flatInfo);

    setFavoriteFlatAdded(flatFavouritedStatus);
  }, [favoriteFlat, flatInfo]);

  return (
    <View style={styles.container}>
      <Icon
        name={favoriteFlatAdded ? 'ios-star' : 'ios-star-outline'}
        style={styles.iconStyle}
        onPress={setFavouriteAdded}
      />
    </View>
  );
}

FavoriteFlat.propTypes = {
  addFlatToFavorite: PropTypes.func.isRequired,
  removeFlatFromFavorite: PropTypes.func.isRequired,
  favoriteFlat: PropTypes.object.isRequired,
  flatInfo: PropTypes.object.isRequired
};

export default withConnect(FavoriteFlat);
