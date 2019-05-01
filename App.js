/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
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
          <Text>ประวัติ</Text>
        </Link>
        <Link to="/work" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>ประสบการณ์</Text>
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
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App
