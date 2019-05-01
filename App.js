/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './Page/container/home'
import Portfolio from  './Page/container/portfolio'
import Work from  './Page/container/work'
import Layout from './Page/hoc/Layout'

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Profile</Text>
        </Link>
        <Link to="/work" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Experience</Text>
        </Link>
        <Link to="/portfolio" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Portfolio</Text>
        </Link>
      </View>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/portfolio" component={Portfolio} />
        </Layout>
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
   
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
});

export default App
