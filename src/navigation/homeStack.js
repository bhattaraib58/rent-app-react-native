import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import FlatDetails from '../screen/flatDetails/flatDetails';
import HomeView from '../screen/home/homeView';
import MapboxView from '../screen/mapboxView/MapboxView';
import FlatImageView from '../screen/flatImageView/FlatImageView';

const HomeStack = createStackNavigator({
    HomeView: {
        screen: HomeView,
        navigationOptions: {
            header:null
        }
    },
    FlatDetails: {
        screen: FlatDetails,
        navigationOptions: {
            headerBackTitle: 'Back',
            headerTitle:'Flat Details',
        }
    },
    MapboxView: {
        screen: MapboxView,
        navigationOptions: {
            headerTitle:'Map View',
        }
    },
    FlatImageView: {
        screen: FlatImageView,
        navigationOptions: {
            headerTitle:'Flat Images',
        }
    },
});

export default HomeStack;
