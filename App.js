/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Profile from './Page/container/profile'
import Portfolio from  './Page/container/portfolio'
import Work from  './Page/container/work'
import Layout from './Page/hoc/Layout'
import Home from './Page/container/home';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthLoadingScreen from './Page/components/auth/authloading'
import SignInScreen from './Page/components/auth/signin'

const WrapProfile =  () => (
  <Layout><Profile/></Layout>
)

const WrapWork =  () => (
  <Layout><Work/></Layout>
)

const WrapPortfolio =  () => (
  <Layout><Portfolio/></Layout>
)

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
  },
  Profile: {
    screen: WrapProfile,
      navigationOptions: { 
        headerTitle: 'Profile',
      },
  },
  Experience: {
    screen: WrapWork,
      navigationOptions: { 
        headerTitle: 'Experience',
      },
  },
  Port: {
    screen: WrapPortfolio,
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