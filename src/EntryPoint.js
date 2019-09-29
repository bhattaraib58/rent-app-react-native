import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

import MainAppLoading from './screen/mainAppLoading/mainAppLoading';
import FlatDetails from './screen/flatDetails/flatDetails';
import HomeView  from './screen/home/homeView';
import withConnect from './hoc/withConnect';


const RootStack = createStackNavigator(
    {
        Home: HomeView,
        FlatDetails: FlatDetails
    },
    {
        initialRouteName: 'Home',
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
            this.state.isLoading ? <MainAppLoading > </MainAppLoading>: <AppContainer />
        )
    }
}

export default withConnect(EntryPoint);
