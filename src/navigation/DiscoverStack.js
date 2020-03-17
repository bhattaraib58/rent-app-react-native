import { createStackNavigator } from 'react-navigation-stack';

import Discover from '../screen/discovery/Discover';
import MapboxView from '../screen/mapboxView/MapboxView';
import FlatDetails from '../screen/flatDetails/FlatDetails';
import FlatImageCarousel from '../screen/flatImageCarousel/FlatImageCarousel';

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
