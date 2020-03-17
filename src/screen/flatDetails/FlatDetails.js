import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

import FlatRating from '../../components/flatRating/FlatRating';
import FlatOptions from '../../components/flatOptions/FlatOptions';
import FlatOffering from '../../components/flatOffering/FlatOffering';
import FavoriteFlat from '../../components/favoriteFlat/FavoriteFlat';
import TagsContainer from '../../components/tagsContainer/TagsContainer';
import FlatFacilities from '../../components/flatFacilities/FlatFacilities';

import MapboxView from '../mapboxView/MapboxView';

import styles from './styles';

class FlatDetails extends Component {
  render() {
    const { navigation } = this.props;
    const flatInfo = navigation.getParam('flatInfo');

    return (
      <>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.imageContainer}>
            <TouchableNativeFeedback
              onPress={() =>
                navigation.navigate('FlatImageCarousel', {
                  flatImages: flatInfo.images
                })
              }
            >
              <Image source={{ uri: flatInfo.images[0] }} style={styles.image} />
            </TouchableNativeFeedback>

            <FavoriteFlat flatInfo={flatInfo} />

            <TouchableNativeFeedback
              onPress={() =>
                navigation.navigate('MapboxView', {
                  coordinate: flatInfo.coordinate
                })
              }
            >
              <View style={styles.mapBoxView}>
                <MapboxView coordinate={flatInfo.coordinate} />
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.mainInfo}>
            <View style={styles.mainInfoLeft}>
              <Text style={styles.price}>
                {flatInfo.Currency} {flatInfo.priceMin} - {flatInfo.priceMax}/{flatInfo.payType}
              </Text>
              <Text style={styles.location}>{flatInfo.location}</Text>
            </View>

            <FlatRating {...flatInfo} />
          </View>

          <FlatOffering />

          <View style={styles.flatInfo}>
            <FlatFacilities {...flatInfo} />
            <Text style={styles.details}>{flatInfo.info}</Text>
            <TagsContainer tags={flatInfo.tags} />
          </View>
        </ScrollView>

        <FlatOptions />
      </>
    );
  }
}

FlatDetails.propTypes = {
  navigation: PropTypes.any
};

export default FlatDetails;
