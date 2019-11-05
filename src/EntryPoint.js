import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';

import withConnect from './hoc/withConnect';
import RootStack from './navigation/rootStack';
import BottomNavigationStack from './navigation/BottomNavigationStack';
// import AppLoading from './screen/appLoading/AppLoading';
// import Signup from './screen/signUp/Signup';

const AppContainer = createAppContainer(RootStack);

export class EntryPoint extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppContainer {...this.props} />;
  }
}

export default withConnect(EntryPoint);
