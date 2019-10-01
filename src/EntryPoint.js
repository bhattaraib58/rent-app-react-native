import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

import MainAppLoading from './screen/mainAppLoading/mainAppLoading';
import withConnect from './hoc/withConnect';
import RootStack from './navigation/rootStack';


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
