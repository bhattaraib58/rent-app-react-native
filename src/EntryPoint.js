import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeView from './screen/Home/HomeView';
import ViewFlatDetails from './screen/ViewFlatDetails';
import AppLoadingScreen from './screen/MainAppLoading/AppLoadingScreen';
import withConnect from './hoc/withConnect';


const RootStack = createStackNavigator(
    {
        Home: HomeView,
        Details: ViewFlatDetails
    },
    {
        initialRouteName: 'Home'
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
            this.state.isLoading ? <AppLoadingScreen></AppLoadingScreen> : <AppContainer />
        )
    }
}

export default withConnect(EntryPoint);
