import {createStackNavigator} from 'react-navigation-stack';

import SignIn from '../screen/signIn/SignIn';
import Signup from '../screen/signUp/Signup';

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default AuthStack;
