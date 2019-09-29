import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";

import MainAppLoading from './screen/mainAppLoading/mainAppLoading';
import HomeView from './screen/home/homeView';
import withConnect from './hoc/withConnect';
import DiscoverFLat from './screen/discovery/DiscoverFLat';
import { textColor, selectedTextColor, subTextColor } from './constants/color';
import FlatDetails from './components/flatDetails/flatDetails';


const RootStack = createBottomTabNavigator(
    {
        Nearby: {
            screen: HomeView,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="leanpub"
                    size={25}
                    color={tintColor} />)
            }
        },
        Discovery: {
            screen: DiscoverFLat,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="compass"
                    size={25}
                    color={tintColor} />)
            }
        },
        Schedule: {
            screen: DiscoverFLat,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="clock-o"
                    size={25}
                    color={tintColor} />)
            }
        },
        Favorite: {
            screen: DiscoverFLat,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (<Icon
                    name="star-o"
                    size={25}
                    color={tintColor} />)
            }
        },
        FlatDetails: {
            screen: FlatDetails,
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

const AppContainer = createAppContainer(RootStack);

export class EntryPoint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            isLoading: false
        }), 2000);
    }


    render() {
        return (
            this.state.isLoading ? <MainAppLoading > </MainAppLoading> : <AppContainer />
        )
    }
}

export default withConnect(EntryPoint);
