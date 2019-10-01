import React, { Component } from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import { textColor, selectedTextColor, subTextColor } from '../constants/color';
import DiscoverStack from './DiscoverStack';
import HomeStack from './homeStack';
import Example from '../screen/example/Example';

const RootStack = createBottomTabNavigator(
    {
        Nearby: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="map-o"
                    size={25}
                    color={tintColor} />)
            }
        },
        Discovery: {
            screen: DiscoverStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="compass"
                    size={25}
                    color={tintColor} />)
            }
        },
        Schedule: {
            screen: Example,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="clock-o"
                    size={25}
                    color={tintColor} />)
            }
        },
        Favorite: {
            screen: Example,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="star-o"
                    size={25}
                    color={tintColor} />)
            }
        },
        More: {
            screen: Example,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon name="puzzle-piece" size={25} color={tintColor} />)
            }
        },
    },
    {
        initialRouteName: 'Nearby',
        tabBarOptions: {
            activeTintColor: selectedTextColor,
            labelStyle: {
                fontSize: 12,
                color: subTextColor,
                fontWeight: "bold",
            },
        },
    }
);

export default RootStack;
