import PropTypes from 'prop-types';
import { View } from 'react-native';
import React, { Component } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

import { MAPBOX_API_KEY } from '../../constants/ApiKey';

import { styles } from './styles';

MapboxGL.setAccessToken(MAPBOX_API_KEY);

class MapboxView extends Component {
  render() {
    let coordinate = null;

    this.props.navigation
      ? (coordinate = this.props.navigation.getParam('coordinate'))
      : (coordinate = this.props.coordinate);

    return (
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={8} centerCoordinate={[coordinate[1], coordinate[0]]} />
          <MapboxGL.PointAnnotation id={'1'} coordinate={[coordinate[1], coordinate[0]]} />
        </MapboxGL.MapView>
      </View>
    );
  }
}

MapboxView.propTypes = {
  coordinate: PropTypes.any,
  navigation: PropTypes.any
};

export default MapboxView;
