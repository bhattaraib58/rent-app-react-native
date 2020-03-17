import { createSwitchNavigator } from 'react-navigation';

import AuthStack from './AuthStack';
import BottomNavigationStack from './BottomNavigationStack';

import AppLoading from '../screen/appLoading/AppLoading';

const RootStack = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AppLoading
    },
    App: {
      screen: BottomNavigationStack
    },
    Auth: {
      screen: AuthStack
    }
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default RootStack;
