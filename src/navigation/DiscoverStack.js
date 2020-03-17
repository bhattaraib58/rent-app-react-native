import { createStackNavigator } from 'react-navigation-stack';

import FlatImageCarousel from '../screen/flatImageCarousel/FlatImageCarousel';
import FlatDetails from '../screen/flatDetails/FlatDetails';
import MapboxView from '../screen/mapboxView/MapboxView';
import Discover from '../screen/discovery/Discover';

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Discover,
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

export default DiscoverStack;
