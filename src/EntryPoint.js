import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';

import withConnect from './hoc/withConnect';
import RootStack from './navigation/rootStack';
import AppLoading from './screen/appLoading/AppLoading';

const AppContainer = createAppContainer(RootStack);

export class EntryPoint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          isLoading: false,
        }),
      2000,
    );
  }

  render() {
    return this.state.isLoading ? <AppLoading> </AppLoading> : <AppContainer />;
  }
}

export default withConnect(EntryPoint);
