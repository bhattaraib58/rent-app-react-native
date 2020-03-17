import { createStackNavigator } from 'react-navigation-stack';

import Nearby from '../screen/nearby/Nearby';
import MapboxView from '../screen/mapboxView/MapboxView';
import FlatDetails from '../screen/flatDetails/FlatDetails';
import FlatImageCarousel from '../screen/flatImageCarousel/FlatImageCarousel';

const NearbyStack = createStackNavigator({
  Nearby: {
    screen: Nearby,
    navigationOptions: {
      header: null
    }
  },
  FlatDetails: {
    screen: FlatDetails,
    navigationOptions: {
      headerBackTitle: 'Back',
      headerTitle: 'Flat Details'
    }
  },
  MapboxView: {
    screen: MapboxView,
    navigationOptions: {
      headerTitle: 'Map View'
    }
  },
  FlatImageCarousel: {
    screen: FlatImageCarousel,
    navigationOptions: {
      headerTitle: 'Flat Images'
    }
  }
});

export default NearbyStack;
