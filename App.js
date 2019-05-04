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
import { createStackNavigator, createAppContainer } from "react-navigation";

const WrapProfile =  () => (
  <Layout><Profile/></Layout>
)

const WrapWork =  () => (
  <Layout><Work/></Layout>
)

const WrapPortfolio =  () => (
  <Layout><Portfolio/></Layout>
)

const AppNavigator = createStackNavigator({
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


export default createAppContainer(AppNavigator)
