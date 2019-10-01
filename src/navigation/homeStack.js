import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import FlatDetails from '../screen/flatDetails/flatDetails';
import HomeView from '../screen/home/homeView';
import MapboxView from '../screen/mapboxView/MapboxView';

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
});

export default HomeStack;
