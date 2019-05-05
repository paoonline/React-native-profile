/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Profile from './Page/container/profile'
import Portfolio from  './Page/container/portfolio'
import Work from  './Page/container/work'
import Home from './Page/container/home';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from './Page/components/auth/authloading'
import SignInScreen from './Page/components/auth/signin'

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
  },
  Profile: {
    screen: Profile,
      navigationOptions: { 
        headerTitle: 'Profile',
      },
  },
  Experience: {
    screen: Work,
      navigationOptions: { 
        headerTitle: 'Experience',
      },
  },
  Port: {
    screen: Portfolio,
      navigationOptions: { 
        headerTitle: 'Portfolio',
      },
  },
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));