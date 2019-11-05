import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';

import styles from './styles';
import withConnect from '../../hoc/withConnect';
import {checkDataExists} from '../../utils/checkDataExists';

const FavoriteFlat = ({
  addFlatToFavorite,
  removeFlatFromFavorite,
  favoriteFlat,
  flatInfo,
}) => {
  const [favoriteFlatAdded, setFavoriteFlatAdded] = useState(false);

  const setFavouriteAdded = () => {
    setFavoriteFlatAdded(!favoriteFlatAdded);

    Snackbar.show({
      title: !favoriteFlatAdded
        ? 'Added To Favorites'
        : 'Removed From Favorites',
      color: 'white',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        title: 'UNDO',
        color: 'green',
      },
    });

    !favoriteFlatAdded
      ? addFlatToFavorite(flatInfo)
      : removeFlatFromFavorite(flatInfo);
  };

  useEffect(() => {
    let flatFavouritedStatus = checkDataExists(
      favoriteFlat.favoriteFlat,
      flatInfo,
    );

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
};

export default withConnect(FavoriteFlat);
