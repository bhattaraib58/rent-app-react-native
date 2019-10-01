import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';

import FlatDetails from '../screen/flatDetails/flatDetails';
import MapboxView from '../screen/mapboxView/MapboxView';
import DiscoverFlat from '../screen/discovery/DiscoverFlat';
import FlatImageView from '../screen/flatImageView/FlatImageView';

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: DiscoverFlat,
        navigationOptions: {
            header: null
        }
    },
    FlatDetails: {
        screen: FlatDetails,
        navigationOptions: {
            headerBackTitle: 'Back',
            headerTitle: 'Flat Details',
        }
    },
    MapboxView: {
        screen: MapboxView,
        navigationOptions: {
            headerTitle: 'Map View',
        }
    },
    FlatImageView: {
        screen: FlatImageView,
        navigationOptions: {
            headerTitle: 'Flat Images',
        }
    },
});

export default DiscoverStack;
