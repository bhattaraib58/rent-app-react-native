/* eslint-disable react/prop-types,react/display-name */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { selectedTextColor, subTextColor } from '../constants/color';

import Favorite from '../screen/favorite/Favorite';

import NearbyStack from './NearbyStack';
import DiscoverStack from './DiscoverStack';

import Example from '../screen/example/Example';

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
