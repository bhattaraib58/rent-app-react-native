import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import { selectedTextColor, subTextColor } from '../constants/color';
import Favorite from '../screen/favorite/Favorite';
import DiscoverStack from './DiscoverStack';
import NearbyStack from './NearbyStack';
import Example from '../screen/example/Example';

/* eslint-disable react/prop-types,react/display-name */

const BottomNavigationStack = createBottomTabNavigator(
  {
    Nearby: {
      screen: NearbyStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="map-o" size={25} color={tintColor} />
      }
    },
    Discovery: {
      screen: DiscoverStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="compass" size={25} color={tintColor} />
      }
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="star-o" size={25} color={tintColor} />
      }
    },
    More: {
      screen: Example,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="puzzle-piece" size={25} color={tintColor} />
      }
    }
  },
  {
    initialRouteName: 'Nearby',
    tabBarOptions: {
      activeTintColor: selectedTextColor,
      labelStyle: {
        fontSize: 12,
        color: subTextColor,
        fontWeight: 'bold'
      }
    }
  }
);

export default BottomNavigationStack;
