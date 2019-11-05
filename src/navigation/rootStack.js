import { createSwitchNavigator } from 'react-navigation';

import BottomNavigationStack from './BottomNavigationStack';
import AppLoading from '../screen/appLoading/AppLoading';
import AuthStack from './AuthStack';

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
