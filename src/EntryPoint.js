import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchPage from './screen/SearchPage';
import ViewFlatDetails from './screen/ViewFlatDetails';
import LoadingScreen from './LoadingScreen';


const RootStack = createStackNavigator(
    {
        Home: SearchPage,
        Details: ViewFlatDetails
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer =createAppContainer(RootStack);
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
            this.state.isLoading ? <LoadingScreen></LoadingScreen> : <AppContainer/>
        )
    }
}

export default EntryPoint
