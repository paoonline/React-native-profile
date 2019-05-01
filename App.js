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
import {styles} from './Page/style/style'

const App = () => (
  <NativeRouter>
    <View style={styles_app.container}>
      <Layout>
        <View style={styles_app.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles_app.navItem}>
            <Text style={styles.color_blue}>Profile</Text>
          </Link>

          <Link to="/work" underlayColor="#f0f4f7" style={styles_app.navItem}>
            <Text style={styles.color_blue}>Experience</Text>
          </Link>

          <Link to="/portfolio" underlayColor="#f0f4f7" style={styles_app.navItem}>
            <Text style={styles.color_blue}>Portfolio</Text>
          </Link>

        </View>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/portfolio" component={Portfolio} />
        </Layout>
    </View>
  </NativeRouter>
);

const styles_app = StyleSheet.create({
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
